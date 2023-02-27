import heroImage from "@assets/img/cash-withdrawal-hero-image.png";
import Image from "next/image";
import Link from "next/link";

const HeroText = () => {
	return (
		<div className="grid grid-cols-1 items-center justify-between gap-8 px-[5%] pt-12 sm:grid-cols-2 sm:gap-24 lg:grid-cols-12 xl:px-[7%]">
			<div className="space-y-4 lg:col-span-7">
				<h1 className="main-header">
					Effortlessly Withdraw Your Cash Anywhere, Anytime.
				</h1>

				<p>
					Effortlessly withdraw your cash, anytime, anywhere with
					FMTL on your mobile app, debit, or credit card.
				</p>

				<div className="flex items-center gap-4">
					<Link
						className="btn block bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
						href="https://play.google.com/store/apps/details?id=com.FMTL.com"
					>
						Download App
					</Link>

					<Link
						className="btn block bg-brand-gray px-8 transition-colors duration-300 ease-in hover:bg-brand-navlink hover:text-white"
						href="https://www.FMTL.org/mobile/login"
					>
						Sign In
					</Link>
				</div>
			</div>

			<Image
				className="rounded-xl lg:col-span-5"
				src={heroImage}
				alt="Withdraw Cash With FMTL Closest Agents"
				quality={100}
				priority={true}
			/>
		</div>
	);
};

export default HeroText;
