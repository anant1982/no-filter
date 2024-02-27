// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const SmallTalkDetails = () => {
	return (
		<div className="flex bg-gray-200 h-full">
			<div className="w-1/3">
				<img
					src={process.env.PUBLIC_URL + "/images/IMG_1637.webp"}
					alt="img-1"
					className="rounded-2xl overflow-hidden h-full"
				/>
			</div>
			<div className="w-4/6">
				<h1 className="text-2xl font-bold py-6 px-10 uppercase tracking-[0.6em]">
					Small Talk
				</h1>
				<swiper-container
					slides-per-view="1.2"
					spaceBetween="100"
					centeredSlides="true"
					speed="500"
					loop="true"
					css-mode="true"
					class="bg-gray-200 p-10 pt-10 pb-0 w-full h-[calc(100%_-_80px)]">
					<swiper-slide>
						<div className="flex gap-10">
							<div className="w-full">
								<h2 className="uppercase text-3xl font-bold my-8">About Us</h2>
								<p className="text-lg">
									Enim in culpa et consectetur occaecat magna cillum fugiat
									adipisicing minim cillum excepteur est nulla. Ullamco aliquip
									aliquip officia ea sunt voluptate irure ad ea laborum
									voluptate commodo aute incididunt. Ex cillum cupidatat
									pariatur ex incididunt irure non consectetur tempor nulla
									exercitation ad quis.
									<br />
									<br />
									Enim in culpa et consectetur occaecat magna cillum fugiat
									adipisicing minim cillum excepteur est nulla. Ullamco aliquip
									aliquip officia ea sunt voluptate irure ad ea laborum
									voluptate commodo aute incididunt. Ex cillum cupidatat
									pariatur ex incididunt irure non consectetur tempor nulla
									exercitation ad quis.
								</p>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div className="flex gap-10">
							<div className="w-full">
								<h2 className="uppercase text-3xl font-bold my-8">Roster</h2>
								<p>
									Enim in culpa et consectetur occaecat magna cillum fugiat
									adipisicing minim cillum excepteur est nulla. Ullamco aliquip
									aliquip officia ea sunt voluptate irure ad ea laborum
									voluptate commodo aute incididunt. Ex cillum cupidatat
									pariatur ex incididunt irure non consectetur tempor nulla
									exercitation ad quis.
									<br />
									<br />
									Enim in culpa et consectetur occaecat magna cillum fugiat
									adipisicing minim cillum excepteur est nulla. Ullamco aliquip
									aliquip officia ea sunt voluptate irure ad ea laborum
									voluptate commodo aute incididunt. Ex cillum cupidatat
									pariatur ex incididunt irure non consectetur tempor nulla
									exercitation ad quis.
								</p>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div className="flex gap-10">
							<div className="w-full">
								<h2 className="uppercase text-3xl font-bold my-8">Brands</h2>
								<p>
									Enim in culpa et consectetur occaecat magna cillum fugiat
									adipisicing minim cillum excepteur est nulla. Ullamco aliquip
									aliquip officia ea sunt voluptate irure ad ea laborum
									voluptate commodo aute incididunt. Ex cillum cupidatat
									pariatur ex incididunt irure non consectetur tempor nulla
									exercitation ad quis.
									<br />
									<br />
									Enim in culpa et consectetur occaecat magna cillum fugiat
									adipisicing minim cillum excepteur est nulla. Ullamco aliquip
									aliquip officia ea sunt voluptate irure ad ea laborum
									voluptate commodo aute incididunt. Ex cillum cupidatat
									pariatur ex incididunt irure non consectetur tempor nulla
									exercitation ad quis.
								</p>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div className="flex gap-10">
							<div className="w-full">
								<h2 className="uppercase text-3xl font-bold my-8">Expertise</h2>
								<p>
									Enim in culpa et consectetur occaecat magna cillum fugiat
									adipisicing minim cillum excepteur est nulla. Ullamco aliquip
									aliquip officia ea sunt voluptate irure ad ea laborum
									voluptate commodo aute incididunt. Ex cillum cupidatat
									pariatur ex incididunt irure non consectetur tempor nulla
									exercitation ad quis.
									<br />
									<br />
									Enim in culpa et consectetur occaecat magna cillum fugiat
									adipisicing minim cillum excepteur est nulla. Ullamco aliquip
									aliquip officia ea sunt voluptate irure ad ea laborum
									voluptate commodo aute incididunt. Ex cillum cupidatat
									pariatur ex incididunt irure non consectetur tempor nulla
									exercitation ad quis.
								</p>
							</div>
						</div>
					</swiper-slide>
				</swiper-container>
			</div>
		</div>
	);
};

export default SmallTalkDetails;
