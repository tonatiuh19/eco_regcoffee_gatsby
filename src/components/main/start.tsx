import React from "react";
import SectionDescription from "./sectionDescription";
import SectionDescriptionGallery from "./sectionDescriptionGallery";
import SectionDescriptionTwo from "./sectionDescriptionTwo";
import SectionMadeWithLove from "./sectionMadeWithLove";
import SectionMain from "./sectionMain";

const Start = () => {
	return (
		<div>
			<SectionMain></SectionMain>
			<SectionDescription></SectionDescription>
			<SectionDescriptionTwo></SectionDescriptionTwo>
			<SectionDescriptionGallery></SectionDescriptionGallery>
			<SectionMadeWithLove></SectionMadeWithLove>
		</div>
	);
};

export default Start;
