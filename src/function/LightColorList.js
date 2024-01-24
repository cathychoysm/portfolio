const colorRange = [229, 204, 255];

export const lightColors = [];
for (let i = 0; i < colorRange.length; i++) {
	for (let j = 0; j < colorRange.length; j++) {
		for (let k = 0; k < colorRange.length; k++) {
			if(!(i === j && j === k)) {
				lightColors.push(`rgb(${colorRange[i]},${colorRange[j]},${colorRange[k]})`)
			}
		}
	}
}