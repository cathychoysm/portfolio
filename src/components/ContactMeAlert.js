import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle
} from "@chakra-ui/alert";
import { CloseButton } from "@chakra-ui/close-button";

export default function ContactMeAlert({ status, title, description, onClose }) {
	return (
		// <div>{ status }, { title }, { description }, { onClose }</div>
		<Alert role="alert" status={ status } flexDirection="column" gridArea={"alert"}>
			<AlertIcon />
			<AlertTitle>{ title }</AlertTitle>
			<AlertDescription textAlign="center">{ description }</AlertDescription>
			<CloseButton onClick={ onClose } position="absolute" top="2px" right="2px"/>
		</Alert>
	);
};