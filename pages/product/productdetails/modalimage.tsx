import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function ModalImage(props: { open: boolean }) {
	return (
		<>
			<FsLightbox
				toggler={props.open}
				sources={[
					"/images/product-detail-01.jpg",
					"/images/product-detail-02.jpg",
					"/images/product-detail-03.jpg",
				]}
			/>
		</>
	);
}

export default ModalImage;