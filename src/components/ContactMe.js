import {
    Button,
    Center,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    Heading,
    Input,
    Textarea,
    VStack,
	useDisclosure
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser"
import ContactMeAlert from "./ContactMeAlert";
import { useState } from "react";

export default function ContactMe() {
	const {isOpen, onOpen, onClose} = useDisclosure();
	const [alert, setAlert] = useState({
		status: "",
		title: "",
		description: ""
	});

	const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string().email("Please enter a valid email.").required("Let me know your email so that I can get back to you"),
            message: Yup.string().max(200, "Please make it shorter than 200 words").required("Please leave some message.")
        }),
        onSubmit: (values, { resetForm }) => {
			if (process.env.NODE_ENV !== "production") {
				setAlert({
					status: "success",
					title: "Message Sent!",
					description: `Thanks for reaching out, ${values.name}. I will get back to you as soon as possible.`
				});
				onOpen();
				return
			}
			try {
                emailjs.send("service_b1vp4yl", "template_a08qdjo", values, "tsxuPEUxJhuY-N4xM")
                .then(() => {
					setAlert({
						status: "success",
						title: "Message Sent!",
						description: `Thanks for reaching out, ${values.name}. I will get back to you as soon as possible.`
					});
					onOpen();
					resetForm();
                })
            } catch(err) {
                alert(`Failed to sent: ${err} Please try again later.`);
				setAlert({
					status: "error",
					title: "Failed to sent:",
					description: `${err}. Please try again later.`
				});
				onOpen();
            }
        }
    });

    return (
        <VStack
            bg="linear-gradient(
                to bottom right,
                #FFE5E5,
                #E0AED0,
                #AC87C5,
                #756AB6)"
            minHeight="95vh" height="100%"
            padding="3vh" gap="3vh">
                <Center
                    bg="linear-gradient(to bottom right, #A985A9, #5B445B)" shadow="inset 1px 1px 3px white, 5px 5px 5px #866986"
                    width="clamp(100px, 70%, 800px)" height="5vh" borderRadius={{ base: "10px", md: "15px" }}
                    fontFamily="heading" fontSize="clamp(18px, 2.5vw, 28px)" color="white"
                    >
                        Contact Me
                </Center>
                <VStack
                    alignItems="flex-start"
                    bgColor="purple.100" shadow="inset 1px 1px 5px white, 5px 5px 5px #866986"
                    width="clamp(100px, 80%, 900px)"
                    padding="clamp(10px, 4vw, 40px)" borderRadius="15px">
                        <Heading fontSize="clamp(15px, 2vw, 23px)" paddingY="3vh">
                            Leave me a message...
                            <FontAwesomeIcon icon={ faMessage } style={{ "paddingLeft": "5px" }}/>
                        </Heading>
                        <Grid
                            as="form"
                            onSubmit={formik.handleSubmit}
                            templateColumns={{ md:"repeat(2, minmax(0, 1fr))" }}
                            templateAreas={{
                                base: `
                                    "name"
                                    "email"
                                    "message"
                                    "submit"
									"alert"
                                `,
                                md: `
                                    "name email"
                                    "message message"
                                    "submit submit"
									"alert alert"
                                `
                            }}
                            gap="3vh"
                            width="100%">
                            <FormControl gridArea={"name"} isInvalid={ formik.touched.name && formik.errors.name }>
                                <FormLabel htmlFor="name" fontSize="clamp(13px, 1.8vw, 20px)">Name:</FormLabel>
                                <Input
                                    id="name"
                                    name="name"
                                    fontSize="clamp(11px, 1.5vw, 15px)"
                                    placeholder="Your name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}/>
                                    <FormErrorMessage fontSize="clamp(9px, 1.3vw, 12px)">{ formik.errors.name }</FormErrorMessage>
                            </FormControl>
                            <FormControl gridArea={"email"}  isInvalid={ formik.touched.email && formik.errors.email }>
                                <FormLabel htmlFor="email" fontSize="clamp(13px, 1.8vw, 20px)">Email:</FormLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    fontSize="clamp(11px, 1.5vw, 15px)"
                                    placeholder="Your email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}/>
                                    <FormErrorMessage fontSize="clamp(9px, 1.3vw, 12px)">{ formik.errors.email }</FormErrorMessage>
                            </FormControl>
                            <FormControl gridArea={"message"}  isInvalid={ formik.touched.message && formik.errors.message }>
                                <FormLabel htmlFor="message" fontSize="clamp(13px, 1.8vw, 20px)">Message:</FormLabel>
                                <Textarea
                                    id="message"
                                    name="message"
                                    fontSize="clamp(11px, 1.5vw, 15px)"
                                    height="20vh"
                                    padding="15px"
                                    placeholder="Leave your message here"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.message}/>
                                    <FormErrorMessage fontSize="clamp(9px, 1.3vw, 12px)">{ formik.errors.message }</FormErrorMessage>
                            </FormControl>
                            <Button
                                type="submit"
                                gridArea={"submit"}
                                leftIcon={<FontAwesomeIcon icon={ faEnvelope }/>}
                                fontSize="clamp(13px, 1.8vw, 20px)"
                                color="white"
                                bgColor="purple.300"
                                _hover={{ bgColor: "purple.400" }}
                                _disabled={{ bgColor: "gray.200" }}
                                isDisabled={!(formik.dirty && formik.isValid)}>
                                    Send
                            </Button>
							{isOpen && <ContactMeAlert status={ alert.status } title={ alert.title } description={ alert.description } onClose={ onClose }/>}
                        </Grid>
                </VStack>
        </VStack>
    );
}