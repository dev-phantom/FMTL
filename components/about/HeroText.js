import aboutHeroImage from "@assets/img/about-hero-image.svg";
import Image from "next/image";
import Link from "next/link";

const HeroText = () => {
	return (
		<div className="grid gap-8 pt-12 grid-cols-1 sm:grid-cols-2 items-center px-[5%] sm:pt-8 sm:gap-16 xl:px-[7%]">
			<div className="flex flex-col gap-5">
				<h1 className="main-header">
					Endless{" "}
					<span className="text-brand-purple">Possibility</span> For
					Every <span className="text-brand-purple">Customer</span>
				</h1>

				<p>
					With FMTL, managing your finances has never been easier. Our extensive network of agents and user-friendly platform allow for seamless and secure financial transactions from the comfort of your own home. Say goodbye to the hassle of visiting banks and say hello to a faster, more convenient financial experience with FMTL.
				</p>

				<div className="flex items-center gap-4 flex-wrap">
					<Link
						className="bg-brand-purple text-white btn block hover:bg-brand-navlink transition-colors duration-300 ease-in"
						href="https://play.google.com/store/apps/details?id=com.FMTL.com"
					>
						Download App
					</Link>

					<Link
						className="hover:bg-brand-gray btn block transition-colors duration-300 ease-in"
						href="/about"
					>
						Learn More
					</Link>
				</div>
			</div>

			<Image
				className="rounded-xl"
				src={aboutHeroImage}
				alt="FMTL app overview"
				quality={100}
				priority={true}
			/>
		</div>
	);
};

export default HeroText;
