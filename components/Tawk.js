import Script from "next/script";

const Tawk = () => {
    return (
        <Script
            id="tawkTo"
            strategy="lazyOnload"
        >
            {`
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/63d82d6247425128791083d3/1go272j3j';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();
            `}
        </Script>
    )
};

export default Tawk;
