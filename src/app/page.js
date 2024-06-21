export default function App() {
return (
<div>
    <div className="relative">
        <div className="w-5/12 left-0 hidden lg:block h-full absolute bg-center bg-cover" style={{backgroundImage: "url('https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/header-2.jpg')"}}>

        </div>
        <div className="container flex flex-col items-center h-full mx-auto draggable pt-4 pb-8">
            <div className="relative flex items-center justify-between w-full px-4 py-10 bg-transparent group shrink-0">
                <div>
                    <img className="hidden lg:block h-8" src="https://loopple.s3.eu-west-3.amazonaws.com/images/B17c2uCXZ1VUC20bqfQSCn7EKsNWu43hIb54TxlZ.png">
                    </img>
                    <img className="block lg:hidden h-8" src="https://loopple.s3.eu-west-3.amazonaws.com/images/h2iKczFNnARZWYEMVEyckUYikBuWBgw5hrUlYTjz.svg">
                    </img>
                </div>
                <div className="items-center justify-end hidden text-black lg:flex">
                    <div className="flex justify-start w-1/2 gap-4 xl:gap-12">
                        <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="#!">
                            Services
                        </a>
                        <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="#!">
                            Process
                        </a>
                        <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="#!">
                            Pricing
                        </a>
                        <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="#!">
                            About
                        </a>
                        <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="#!">
                            FAQ
                        </a>
                    </div>
                </div>
                <div className="items-center hidden gap-8 lg:flex">
                    <button className="flex items-center px-4 py-2 text-sm font-bold rounded-3xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300">
                        Let's Talk
                    </button>
                </div>
                <button className="flex lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" fill="black">
                        </path>
                    </svg>
                </button>
                <div className="absolute flex lg:hidden transition-all duration-300 ease-in-out flex-col items-start shadow-main justify-center w-full gap-3 overflow-hidden bg-white max-h-0 group-[.open]:py-4 px-4 rounded-2xl group-[.open]:max-h-64 top-full">
                    <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="#!">
                        Product
                    </a>
                    <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="#!">
                        Features
                    </a>
                    <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="#!">
                        Pricing
                    </a>
                    <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="#!">
                        Company
                    </a>
                    <button className="flex items-center px-4 py-2 text-sm font-bold rounded-3xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300">
                        Try it for Free
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-end w-full my-auto text-center lg:text-start">
                <div className="items-center justify-center w-full px-2 lg:w-6/12">
                    <h4 className="text-sm font-bold tracking-widest text-primary uppercase">

                    </h4>
                    <h4 className="text-sm font-bold tracking-widest text-primary uppercase mt-4">
                        PROFESSIONAL WEB DESIGN SERVICES
                    </h4>
                    <h1 className="mb-6 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900 font-display">

                    </h1>
                    <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900 font-display">
                        Enhance your web presence with fleetscan
                    </h1>
                    <p className="mb-8 text-base font-normal leading-7 lg:w-3/4 text-grey-700">
                        <span style={{color: "rgb(43, 54, 116)"}}>
                            We specialize in building websites that will give your business the professional edge it needs to thrive in the digital age.
                        </span>
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-8 lg:justify-normal lg:gap-0 lg:flex-nowrap">
                        <input type="email" placeholder="Subscribe to begin" className="flex items-center py-4 pl-5 pr-8 mr-2 text-sm font-medium border border-solid rounded-full outline-none w-60 placeholder:text-grey-700 border-grey-500 focus:border-grey-600 text-dark-grey-900">
                        </input>
                        <button className="flex items-center py-4 text-sm font-bold text-white rounded-full px-7 bg-purple-blue-500 hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300">
                            Let's talk
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-full draggable">
        <div className="container flex flex-col items-center gap-16 mx-auto my-32">
            <div className="grid w-full grid-cols-1">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-2 text-center md:text-start">
                        <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl text-dark-grey-900 font-display">
                            What We Offer
                        </h2>
                        <p className="text-base font-medium leading-7 text-dark-grey-600 mt-3">
                            At fleetscan, we provide comprehensive solutions to elevate your transportation and logistics business online.
                        </p>
                    </div>
                    <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-10">
                        <div className="flex flex-col items-start gap-1">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500 mb-2 mb-2">
                                <span className="text-base font-bold leading-7 text-white">
                                    1
                                </span>
                            </div>
                            <h3 className="text-base font-bold leading-tight text-dark-grey-900 font-display">
                                Domain Registration & Hosting
                            </h3>
                            <p className="text-base font-medium leading-7 text-dark-grey-600">
                                We handle all your domain registration and hosting needs, ensuring your website is secure, reliable, and always accessible.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500 mb-2">
                                <span className="text-base font-bold leading-7 text-white">
                                    2
                                </span>
                            </div>
                            <h3 className="text-base font-bold leading-tight text-dark-grey-900 font-display">
                                Web Design
                                <br>
                                </br>
                            </h3>
                            <p className="text-base font-medium leading-7 text-dark-grey-600">
                                Our expert team designs custom, user-friendly websites tailored to your unique business needs, helping you stand out from the competition.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500 mb-2">
                                <span className="text-base font-bold leading-7 text-white">
                                    3
                                </span>
                            </div>
                            <h3 className="text-base font-bold leading-tight text-dark-grey-900 font-display">
                                Custom Email Domains
                            </h3>
                            <p className="text-base font-medium leading-7 text-dark-grey-600">
                                Enhance your professionalism with custom email domains that match your website, building trust and credibility with your clients.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500 mb-2">
                                <span className="text-base font-bold leading-7 text-white">
                                    4
                                </span>
                            </div>
                            <h3 className="text-base font-bold leading-tight text-dark-grey-900 font-display">
                                Website Analytics
                            </h3>
                            <p className="text-base font-medium leading-7 text-dark-grey-600">
                                We help you track visitor behavior, optimize user experience, and drive business growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container mx-auto draggable">

    </div>
    <div className="w-full bg-cover pb-8 pt-16 bg-left-bottom draggable" style={{backgroundImage: "url('https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/cta-3-bg.jpg')"}}>
        <div className="container mx-auto w-full flex justify-center">
            <div className="flex flex-col justify-center h-full my-auto text-center text-white lg:text-start lg:w-7/12 align-center">
                <h2 className="mb-4 text-5xl font-extrabold leading-tight font-display">
                    How Will A Website Help Your Business?
                </h2>
                <p className="mb-10 text-lg font-medium">
                    A professional website can transform your transportation and logistics business by enhancing visibility, building credibility, and providing a convenient platform for customer engagement. It showcases your offerings and expertise, helping potential clients find and trust your services.
                </p>
                <div className="flex items-center gap-4 mb-4 py-4 px-3 align-center">
                    <a className="flex items-center py-4 text-sm font-bold bg-white border border-white px-7 rounded-2xl text-dark-grey-900 hover:bg-gray-100 focus:ring-4 focus:ring-white-200 transition duration-300" href="contact_us.html" data-type-link="linktopage">
                        Let's Talk
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="container flex flex-col items-center gap-16 mx-auto my-20 draggable">
        <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2 text-center">
                <h2 className="text-3xl font-extrabold leading-tight lg:text-4xl text-dark-grey-900 font-display">
                    Our Process
                </h2>
                <p className="text-base font-medium leading-7 text-dark-grey-600">
                    How we take your web presence from zero to hero.
                </p>
            </div>
        </div>
        <div className="flex flex-col items-center justify-between w-full lg:flex-row gap-y-10 lg:gap-y-0 gap-x-5 xl:gap-x-10">
            <div className="flex items-start gap-4">
                <div className="flex flex-col items-center text-center gap-y-5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full shrink-0 bg-purple-blue-500">
                        <span className="text-base font-bold leading-7 text-white">
                            1
                        </span>
                    </div>
                    <div>
                        <h3 className="text-base font-bold leading-7 text-dark-grey-900 font-display">
                            Discovery
                        </h3>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                        </p>
                        <p>
                            We start by understanding your business goals, target audience, and specific requirements to create a tailored web strategy that aligns with your vision.
                        </p>
                        <p>
                        </p>
                        <p>
                        </p>
                    </div>
                </div>
            </div>
            <div className="rotate-90 lg:rotate-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                    <g clipPath="url(#clip0_3346_6663)">
                        <path d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z" fill="#A3AED0">
                        </path>
                    </g>
                    <defs>
                        <clippath id="clip0_3346_6663">
                            <rect width="42" height="42" fill="white" transform="translate(0.666748)">
                            </rect>
                        </clippath>
                    </defs>
                </svg>
            </div>
            <div className="flex items-start gap-4">
                <div className="flex flex-col items-center text-center gap-y-5">
                    <div className="flex items-center justify-center w-12 h-12 bg-transparent border-2 border-solid rounded-full shrink-0 text-purple-blue-500 border-purple-blue-500">
                        <span className="text-base font-bold leading-7">
                            2
                        </span>
                    </div>
                    <div>
                        <h3 className="text-base font-bold leading-7 text-dark-grey-900 font-display">
                            Design & Development
                        </h3>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                        </p>
                        <p contenteditable="true">
                            Our expert team crafts a user-friendly website design that not only looks great but also delivers a seamless experience across all devices.
                        </p>
                        <p>
                        </p>
                        <p>
                        </p>
                    </div>
                </div>
            </div>
            <div className="rotate-90 lg:rotate-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                    <g clipPath="url(#clip0_3346_6663)">
                        <path d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z" fill="#A3AED0">
                        </path>
                    </g>
                    <defs>
                        <clippath id="clip0_3346_6663">
                            <rect width="42" height="42" fill="white" transform="translate(0.666748)">
                            </rect>
                        </clippath>
                    </defs>
                </svg>
            </div>
            <div className="flex items-start gap-4">
                <div className="flex flex-col items-center text-center gap-y-5">
                    <div className="flex items-center justify-center w-12 h-12 bg-transparent border-2 border-solid rounded-full shrink-0 text-purple-blue-500 border-purple-blue-500">
                        <span className="text-base font-bold leading-7">
                            3
                        </span>
                    </div>
                    <div>
                        <h3 className="text-base font-bold leading-7 text-dark-grey-900 font-display">
                            Launch
                        </h3>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                            We launch your website, ensuring everything runs smoothly and providing ongoing support to keep your site performing at its best
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container flex flex-col mx-auto my-20 gap-14 draggable">
        <div className="flex flex-col items-center justify-center w-full text-center gap-y-5">
            <h2 className="text-4xl font-extrabold text-dark-grey-900 font-display">
                How Much Does It Cost?
            </h2>
            <p className="text-base leading-7 text-dark-grey-600">
                We believe that a high quality website shouldn't break the bank
            </p>
            <div className="flex flex-row justify-center gap-5">

            </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center px-8 py-5 bg-white gap-y-10 rounded-3xl">
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col items-start justify-between gap-y-3">
                        <h3 className="text-3xl font-extrabold leading-tight text-dark-grey-900 font-display">
                            Standard
                        </h3>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                            + $250 one time fee.
                        </p>
                    </div>
                    <div className="flex flex-col items-end justify-between text-right gap-y-3">
                        <h3 className="text-3xl font-extrabold leading-tight text-dark-grey-900 font-display">
                            $99
                        </h3>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                            Billed Monthly
                        </p>
                    </div>
                </div>
                <hr className="w-full h-0 border-solid border-grey-400">
                </hr>
                <div className="flex flex-col w-full gap-4 self-start-start">
                    <div className="flex flex-row items-center gap-3">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M15.5917 6.50828C15.5142 6.43017 15.4221 6.36818 15.3205 6.32587C15.219 6.28356 15.11 6.26178 15 6.26178C14.89 6.26178 14.7811 6.28356 14.6796 6.32587C14.578 6.36818 14.4858 6.43017 14.4084 6.50828L8.20004 12.7249L5.59171 10.1083C5.51127 10.0306 5.41632 9.96948 5.31227 9.92848C5.20823 9.88748 5.09713 9.86737 4.98531 9.8693C4.87349 9.87124 4.76315 9.89518 4.66058 9.93976C4.55802 9.98433 4.46524 10.0487 4.38754 10.1291C4.30984 10.2095 4.24875 10.3045 4.20774 10.4085C4.16674 10.5126 4.14663 10.6237 4.14856 10.7355C4.1505 10.8473 4.17444 10.9577 4.21902 11.0602C4.2636 11.1628 4.32794 11.2556 4.40837 11.3333L7.60837 14.5333C7.68584 14.6114 7.77801 14.6734 7.87956 14.7157C7.98111 14.758 8.09003 14.7798 8.20004 14.7798C8.31005 14.7798 8.41897 14.758 8.52052 14.7157C8.62207 14.6734 8.71424 14.6114 8.79171 14.5333L15.5917 7.73328C15.6763 7.65524 15.7438 7.56053 15.79 7.45512C15.8361 7.3497 15.86 7.23586 15.86 7.12078C15.86 7.00569 15.8361 6.89186 15.79 6.78644C15.7438 6.68102 15.6763 6.58631 15.5917 6.50828Z" fill="white">
                                </path>
                            </svg>
                        </span>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                            5 Pages
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M15.5917 6.50828C15.5142 6.43017 15.4221 6.36818 15.3205 6.32587C15.219 6.28356 15.11 6.26178 15 6.26178C14.89 6.26178 14.7811 6.28356 14.6796 6.32587C14.578 6.36818 14.4858 6.43017 14.4084 6.50828L8.20004 12.7249L5.59171 10.1083C5.51127 10.0306 5.41632 9.96948 5.31227 9.92848C5.20823 9.88748 5.09713 9.86737 4.98531 9.8693C4.87349 9.87124 4.76315 9.89518 4.66058 9.93976C4.55802 9.98433 4.46524 10.0487 4.38754 10.1291C4.30984 10.2095 4.24875 10.3045 4.20774 10.4085C4.16674 10.5126 4.14663 10.6237 4.14856 10.7355C4.1505 10.8473 4.17444 10.9577 4.21902 11.0602C4.2636 11.1628 4.32794 11.2556 4.40837 11.3333L7.60837 14.5333C7.68584 14.6114 7.77801 14.6734 7.87956 14.7157C7.98111 14.758 8.09003 14.7798 8.20004 14.7798C8.31005 14.7798 8.41897 14.758 8.52052 14.7157C8.62207 14.6734 8.71424 14.6114 8.79171 14.5333L15.5917 7.73328C15.6763 7.65524 15.7438 7.56053 15.79 7.45512C15.8361 7.3497 15.86 7.23586 15.86 7.12078C15.86 7.00569 15.8361 6.89186 15.79 6.78644C15.7438 6.68102 15.6763 6.58631 15.5917 6.50828Z" fill="white">
                                </path>
                            </svg>
                        </span>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                            Hosting
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M15.5917 6.50828C15.5142 6.43017 15.4221 6.36818 15.3205 6.32587C15.219 6.28356 15.11 6.26178 15 6.26178C14.89 6.26178 14.7811 6.28356 14.6796 6.32587C14.578 6.36818 14.4858 6.43017 14.4084 6.50828L8.20004 12.7249L5.59171 10.1083C5.51127 10.0306 5.41632 9.96948 5.31227 9.92848C5.20823 9.88748 5.09713 9.86737 4.98531 9.8693C4.87349 9.87124 4.76315 9.89518 4.66058 9.93976C4.55802 9.98433 4.46524 10.0487 4.38754 10.1291C4.30984 10.2095 4.24875 10.3045 4.20774 10.4085C4.16674 10.5126 4.14663 10.6237 4.14856 10.7355C4.1505 10.8473 4.17444 10.9577 4.21902 11.0602C4.2636 11.1628 4.32794 11.2556 4.40837 11.3333L7.60837 14.5333C7.68584 14.6114 7.77801 14.6734 7.87956 14.7157C7.98111 14.758 8.09003 14.7798 8.20004 14.7798C8.31005 14.7798 8.41897 14.758 8.52052 14.7157C8.62207 14.6734 8.71424 14.6114 8.79171 14.5333L15.5917 7.73328C15.6763 7.65524 15.7438 7.56053 15.79 7.45512C15.8361 7.3497 15.86 7.23586 15.86 7.12078C15.86 7.00569 15.8361 6.89186 15.79 6.78644C15.7438 6.68102 15.6763 6.58631 15.5917 6.50828Z" fill="white">
                                </path>
                            </svg>
                        </span>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                            Design & Development
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M15.5917 6.50828C15.5142 6.43017 15.4221 6.36818 15.3205 6.32587C15.219 6.28356 15.11 6.26178 15 6.26178C14.89 6.26178 14.7811 6.28356 14.6796 6.32587C14.578 6.36818 14.4858 6.43017 14.4084 6.50828L8.20004 12.7249L5.59171 10.1083C5.51127 10.0306 5.41632 9.96948 5.31227 9.92848C5.20823 9.88748 5.09713 9.86737 4.98531 9.8693C4.87349 9.87124 4.76315 9.89518 4.66058 9.93976C4.55802 9.98433 4.46524 10.0487 4.38754 10.1291C4.30984 10.2095 4.24875 10.3045 4.20774 10.4085C4.16674 10.5126 4.14663 10.6237 4.14856 10.7355C4.1505 10.8473 4.17444 10.9577 4.21902 11.0602C4.2636 11.1628 4.32794 11.2556 4.40837 11.3333L7.60837 14.5333C7.68584 14.6114 7.77801 14.6734 7.87956 14.7157C7.98111 14.758 8.09003 14.7798 8.20004 14.7798C8.31005 14.7798 8.41897 14.758 8.52052 14.7157C8.62207 14.6734 8.71424 14.6114 8.79171 14.5333L15.5917 7.73328C15.6763 7.65524 15.7438 7.56053 15.79 7.45512C15.8361 7.3497 15.86 7.23586 15.86 7.12078C15.86 7.00569 15.8361 6.89186 15.79 6.78644C15.7438 6.68102 15.6763 6.58631 15.5917 6.50828Z" fill="white">
                                </path>
                            </svg>
                        </span>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                            Google Analytics
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M15.5917 6.50828C15.5142 6.43017 15.4221 6.36818 15.3205 6.32587C15.219 6.28356 15.11 6.26178 15 6.26178C14.89 6.26178 14.7811 6.28356 14.6796 6.32587C14.578 6.36818 14.4858 6.43017 14.4084 6.50828L8.20004 12.7249L5.59171 10.1083C5.51127 10.0306 5.41632 9.96948 5.31227 9.92848C5.20823 9.88748 5.09713 9.86737 4.98531 9.8693C4.87349 9.87124 4.76315 9.89518 4.66058 9.93976C4.55802 9.98433 4.46524 10.0487 4.38754 10.1291C4.30984 10.2095 4.24875 10.3045 4.20774 10.4085C4.16674 10.5126 4.14663 10.6237 4.14856 10.7355C4.1505 10.8473 4.17444 10.9577 4.21902 11.0602C4.2636 11.1628 4.32794 11.2556 4.40837 11.3333L7.60837 14.5333C7.68584 14.6114 7.77801 14.6734 7.87956 14.7157C7.98111 14.758 8.09003 14.7798 8.20004 14.7798C8.31005 14.7798 8.41897 14.758 8.52052 14.7157C8.62207 14.6734 8.71424 14.6114 8.79171 14.5333L15.5917 7.73328C15.6763 7.65524 15.7438 7.56053 15.79 7.45512C15.8361 7.3497 15.86 7.23586 15.86 7.12078C15.86 7.00569 15.8361 6.89186 15.79 6.78644C15.7438 6.68102 15.6763 6.58631 15.5917 6.50828Z" fill="white">
                                </path>
                            </svg>
                        </span>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                            1 Custom Email
                        </p>
                    </div>
                </div>
                <hr className="w-full h-0 border-solid border-grey-400">
                </hr>
                <div className="flex flex-col items-center w-full gap-5">
                    <a className="w-full px-4 py-3 text-sm font-bold transition duration-300 border border-solid hover:bg-purple-blue-500 hover:text-white focus:ring-4 focus:ring-purple-blue-100 border-purple-blue-500 text-purple-blue-500 rounded-2xl" href="contact_us.html" data-type-link="linktopage">
                        Get Started Now
                    </a>
                </div>
            </div>
            <div className="flex flex-col items-center px-8 py-5 bg-white gap-y-10 rounded-3xl shadow-main border border-purple-blue-500">
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col items-start justify-between gap-y-3">
                        <h3 className="text-3xl font-extrabold leading-tight text-dark-grey-900 font-display">
                            Advanced
                        </h3>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                            + $1500 one time fee
                        </p>
                    </div>
                    <div className="flex flex-col items-end justify-between text-right gap-y-3">
                        <h3 className="text-3xl font-extrabold leading-tight text-dark-grey-900 font-display">
                            $199
                        </h3>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                            Billed Monthly
                        </p>
                    </div>
                </div>
                <hr className="w-full h-0 border-solid border-grey-400">
                </hr>
                <div className="flex flex-col w-full gap-4 self-start-start">
                    <div className="flex flex-row items-center gap-3">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M15.5917 6.50828C15.5142 6.43017 15.4221 6.36818 15.3205 6.32587C15.219 6.28356 15.11 6.26178 15 6.26178C14.89 6.26178 14.7811 6.28356 14.6796 6.32587C14.578 6.36818 14.4858 6.43017 14.4084 6.50828L8.20004 12.7249L5.59171 10.1083C5.51127 10.0306 5.41632 9.96948 5.31227 9.92848C5.20823 9.88748 5.09713 9.86737 4.98531 9.8693C4.87349 9.87124 4.76315 9.89518 4.66058 9.93976C4.55802 9.98433 4.46524 10.0487 4.38754 10.1291C4.30984 10.2095 4.24875 10.3045 4.20774 10.4085C4.16674 10.5126 4.14663 10.6237 4.14856 10.7355C4.1505 10.8473 4.17444 10.9577 4.21902 11.0602C4.2636 11.1628 4.32794 11.2556 4.40837 11.3333L7.60837 14.5333C7.68584 14.6114 7.77801 14.6734 7.87956 14.7157C7.98111 14.758 8.09003 14.7798 8.20004 14.7798C8.31005 14.7798 8.41897 14.758 8.52052 14.7157C8.62207 14.6734 8.71424 14.6114 8.79171 14.5333L15.5917 7.73328C15.6763 7.65524 15.7438 7.56053 15.79 7.45512C15.8361 7.3497 15.86 7.23586 15.86 7.12078C15.86 7.00569 15.8361 6.89186 15.79 6.78644C15.7438 6.68102 15.6763 6.58631 15.5917 6.50828Z" fill="white">
                                </path>
                            </svg>
                        </span>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                            10+ Pages
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M15.5917 6.50828C15.5142 6.43017 15.4221 6.36818 15.3205 6.32587C15.219 6.28356 15.11 6.26178 15 6.26178C14.89 6.26178 14.7811 6.28356 14.6796 6.32587C14.578 6.36818 14.4858 6.43017 14.4084 6.50828L8.20004 12.7249L5.59171 10.1083C5.51127 10.0306 5.41632 9.96948 5.31227 9.92848C5.20823 9.88748 5.09713 9.86737 4.98531 9.8693C4.87349 9.87124 4.76315 9.89518 4.66058 9.93976C4.55802 9.98433 4.46524 10.0487 4.38754 10.1291C4.30984 10.2095 4.24875 10.3045 4.20774 10.4085C4.16674 10.5126 4.14663 10.6237 4.14856 10.7355C4.1505 10.8473 4.17444 10.9577 4.21902 11.0602C4.2636 11.1628 4.32794 11.2556 4.40837 11.3333L7.60837 14.5333C7.68584 14.6114 7.77801 14.6734 7.87956 14.7157C7.98111 14.758 8.09003 14.7798 8.20004 14.7798C8.31005 14.7798 8.41897 14.758 8.52052 14.7157C8.62207 14.6734 8.71424 14.6114 8.79171 14.5333L15.5917 7.73328C15.6763 7.65524 15.7438 7.56053 15.79 7.45512C15.8361 7.3497 15.86 7.23586 15.86 7.12078C15.86 7.00569 15.8361 6.89186 15.79 6.78644C15.7438 6.68102 15.6763 6.58631 15.5917 6.50828Z" fill="white">
                                </path>
                            </svg>
                        </span>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                            Hosting
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M15.5917 6.50828C15.5142 6.43017 15.4221 6.36818 15.3205 6.32587C15.219 6.28356 15.11 6.26178 15 6.26178C14.89 6.26178 14.7811 6.28356 14.6796 6.32587C14.578 6.36818 14.4858 6.43017 14.4084 6.50828L8.20004 12.7249L5.59171 10.1083C5.51127 10.0306 5.41632 9.96948 5.31227 9.92848C5.20823 9.88748 5.09713 9.86737 4.98531 9.8693C4.87349 9.87124 4.76315 9.89518 4.66058 9.93976C4.55802 9.98433 4.46524 10.0487 4.38754 10.1291C4.30984 10.2095 4.24875 10.3045 4.20774 10.4085C4.16674 10.5126 4.14663 10.6237 4.14856 10.7355C4.1505 10.8473 4.17444 10.9577 4.21902 11.0602C4.2636 11.1628 4.32794 11.2556 4.40837 11.3333L7.60837 14.5333C7.68584 14.6114 7.77801 14.6734 7.87956 14.7157C7.98111 14.758 8.09003 14.7798 8.20004 14.7798C8.31005 14.7798 8.41897 14.758 8.52052 14.7157C8.62207 14.6734 8.71424 14.6114 8.79171 14.5333L15.5917 7.73328C15.6763 7.65524 15.7438 7.56053 15.79 7.45512C15.8361 7.3497 15.86 7.23586 15.86 7.12078C15.86 7.00569 15.8361 6.89186 15.79 6.78644C15.7438 6.68102 15.6763 6.58631 15.5917 6.50828Z" fill="white">
                                </path>
                            </svg>
                        </span>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                            Design & Development
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M15.5917 6.50828C15.5142 6.43017 15.4221 6.36818 15.3205 6.32587C15.219 6.28356 15.11 6.26178 15 6.26178C14.89 6.26178 14.7811 6.28356 14.6796 6.32587C14.578 6.36818 14.4858 6.43017 14.4084 6.50828L8.20004 12.7249L5.59171 10.1083C5.51127 10.0306 5.41632 9.96948 5.31227 9.92848C5.20823 9.88748 5.09713 9.86737 4.98531 9.8693C4.87349 9.87124 4.76315 9.89518 4.66058 9.93976C4.55802 9.98433 4.46524 10.0487 4.38754 10.1291C4.30984 10.2095 4.24875 10.3045 4.20774 10.4085C4.16674 10.5126 4.14663 10.6237 4.14856 10.7355C4.1505 10.8473 4.17444 10.9577 4.21902 11.0602C4.2636 11.1628 4.32794 11.2556 4.40837 11.3333L7.60837 14.5333C7.68584 14.6114 7.77801 14.6734 7.87956 14.7157C7.98111 14.758 8.09003 14.7798 8.20004 14.7798C8.31005 14.7798 8.41897 14.758 8.52052 14.7157C8.62207 14.6734 8.71424 14.6114 8.79171 14.5333L15.5917 7.73328C15.6763 7.65524 15.7438 7.56053 15.79 7.45512C15.8361 7.3497 15.86 7.23586 15.86 7.12078C15.86 7.00569 15.8361 6.89186 15.79 6.78644C15.7438 6.68102 15.6763 6.58631 15.5917 6.50828Z" fill="white">
                                </path>
                            </svg>
                        </span>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                            Google Analytics
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M15.5917 6.50828C15.5142 6.43017 15.4221 6.36818 15.3205 6.32587C15.219 6.28356 15.11 6.26178 15 6.26178C14.89 6.26178 14.7811 6.28356 14.6796 6.32587C14.578 6.36818 14.4858 6.43017 14.4084 6.50828L8.20004 12.7249L5.59171 10.1083C5.51127 10.0306 5.41632 9.96948 5.31227 9.92848C5.20823 9.88748 5.09713 9.86737 4.98531 9.8693C4.87349 9.87124 4.76315 9.89518 4.66058 9.93976C4.55802 9.98433 4.46524 10.0487 4.38754 10.1291C4.30984 10.2095 4.24875 10.3045 4.20774 10.4085C4.16674 10.5126 4.14663 10.6237 4.14856 10.7355C4.1505 10.8473 4.17444 10.9577 4.21902 11.0602C4.2636 11.1628 4.32794 11.2556 4.40837 11.3333L7.60837 14.5333C7.68584 14.6114 7.77801 14.6734 7.87956 14.7157C7.98111 14.758 8.09003 14.7798 8.20004 14.7798C8.31005 14.7798 8.41897 14.758 8.52052 14.7157C8.62207 14.6734 8.71424 14.6114 8.79171 14.5333L15.5917 7.73328C15.6763 7.65524 15.7438 7.56053 15.79 7.45512C15.8361 7.3497 15.86 7.23586 15.86 7.12078C15.86 7.00569 15.8361 6.89186 15.79 6.78644C15.7438 6.68102 15.6763 6.58631 15.5917 6.50828Z" fill="white">
                                </path>
                            </svg>
                        </span>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                            5 Custom Emails
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M15.5917 6.50828C15.5142 6.43017 15.4221 6.36818 15.3205 6.32587C15.219 6.28356 15.11 6.26178 15 6.26178C14.89 6.26178 14.7811 6.28356 14.6796 6.32587C14.578 6.36818 14.4858 6.43017 14.4084 6.50828L8.20004 12.7249L5.59171 10.1083C5.51127 10.0306 5.41632 9.96948 5.31227 9.92848C5.20823 9.88748 5.09713 9.86737 4.98531 9.8693C4.87349 9.87124 4.76315 9.89518 4.66058 9.93976C4.55802 9.98433 4.46524 10.0487 4.38754 10.1291C4.30984 10.2095 4.24875 10.3045 4.20774 10.4085C4.16674 10.5126 4.14663 10.6237 4.14856 10.7355C4.1505 10.8473 4.17444 10.9577 4.21902 11.0602C4.2636 11.1628 4.32794 11.2556 4.40837 11.3333L7.60837 14.5333C7.68584 14.6114 7.77801 14.6734 7.87956 14.7157C7.98111 14.758 8.09003 14.7798 8.20004 14.7798C8.31005 14.7798 8.41897 14.758 8.52052 14.7157C8.62207 14.6734 8.71424 14.6114 8.79171 14.5333L15.5917 7.73328C15.6763 7.65524 15.7438 7.56053 15.79 7.45512C15.8361 7.3497 15.86 7.23586 15.86 7.12078C15.86 7.00569 15.8361 6.89186 15.79 6.78644C15.7438 6.68102 15.6763 6.58631 15.5917 6.50828Z" fill="white">
                                </path>
                            </svg>
                        </span>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                            Branding & Logo Design
                        </p>
                    </div>
                </div>
                <hr className="w-full h-0 border-solid border-grey-400">
                </hr>
                <div className="flex flex-col items-center w-full gap-5">
                    <a className="w-full px-4 py-3 text-sm font-bold text-white transition duration-300 border border-solid hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 border-purple-blue-500 bg-purple-blue-500 rounded-2xl" href="contact_us.html" data-type-link="linktopage">
                        Get Started Now
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="container flex flex-col items-center gap-16 mx-auto my-32 draggable">
        <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-extrabold text-center md:text-4xl text-dark-grey-900 font-display">
                Frequently Asked Questions
            </h2>
            <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
                Our dedicated team has compiled a comprehensive list of frequently asked questions to provide you with the information you need.
            </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
            <div className="flex flex-col items-start col-span-1 gap-6 px-8 py-10 rounded-2xl bg-grey-200">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3">
                        </path>
                    </svg>
                </span>
                <div className="flex flex-col items-start gap-2">
                    <h3 className="text-xl font-extrabold text-dark-grey-900 font-display">
                        How long does it take to build a website?
                    </h3>
                    <p className="text-base font-medium leading-7 text-dark-grey-600">
                        The timeline for building a website varies depending on the complexity and specific requirements of your project. On average, it takes about 4-8 weeks from the initial consultation to the final launch.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-start col-span-1 gap-6 px-8 py-10 rounded-2xl bg-grey-200">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">
                        </path>
                    </svg>
                </span>
                <div className="flex flex-col items-start gap-2">
                    <h3 className="text-xl font-extrabold text-dark-grey-900 font-display">
                        Can you help with domain registration and hosting?
                    </h3>
                    <p className="text-base font-medium leading-7 text-dark-grey-600">
                        Yes, we provide comprehensive services that include domain registration and hosting, ensuring your website is secure, reliable, and always accessible.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-start col-span-1 gap-6 px-8 py-10 rounded-2xl bg-grey-200">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z">
                        </path>
                    </svg>
                </span>
                <div className="flex flex-col items-start gap-2">
                    <h3 className="text-xl font-extrabold text-dark-grey-900 font-display">
                        Will my website be mobile-friendly?
                    </h3>
                    <p className="text-base font-medium leading-7 text-dark-grey-600">
                        Absolutely! We design all our websites to be fully responsive, meaning they will look and function perfectly on any device, including smartphones and tablets.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-start col-span-1 gap-6 px-8 py-10 rounded-2xl bg-grey-200">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z">
                        </path>
                    </svg>
                </span>
                <div className="flex flex-col items-start gap-2">
                    <h3 className="text-xl font-extrabold text-dark-grey-900 font-display">
                        Do you offer custom email domains?
                    </h3>
                    <p className="text-base font-medium leading-7 text-dark-grey-600">
                        Yes, we can set up custom email domains that match your website, enhancing your professional image and making it easier for clients to contact you.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-start col-span-1 gap-6 px-8 py-10 rounded-2xl bg-grey-200">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14.36 14.23C13.6915 14.769 12.8587 15.0629 12 15.0629C11.1413 15.0629 10.3085 14.769 9.64 14.23C9.43579 14.0603 9.17251 13.9786 8.90808 14.003C8.64365 14.0274 8.39974 14.1558 8.23 14.36C8.06027 14.5642 7.9786 14.8275 8.00298 15.0919C8.02736 15.3563 8.15579 15.6003 8.36 15.77C9.38134 16.6226 10.6696 17.0896 12 17.0896C13.3304 17.0896 14.6187 16.6226 15.64 15.77C15.8442 15.6003 15.9726 15.3563 15.997 15.0919C16.0214 14.8275 15.9397 14.5642 15.77 14.36C15.686 14.2589 15.5828 14.1753 15.4665 14.1141C15.3501 14.0528 15.2229 14.0151 15.0919 14.003C14.8275 13.9786 14.5642 14.0603 14.36 14.23ZM9.21 10.54C9.39737 10.7263 9.65082 10.8308 9.915 10.8308C10.1792 10.8308 10.4326 10.7263 10.62 10.54C10.8063 10.3526 10.9108 10.0992 10.9108 9.835C10.9108 9.57081 10.8063 9.31736 10.62 9.13C10.0477 8.58699 9.2889 8.28428 8.5 8.28428C7.71111 8.28428 6.95228 8.58699 6.38 9.13C6.27532 9.21965 6.1903 9.32997 6.13028 9.45403C6.07026 9.57809 6.03653 9.71323 6.03121 9.85095C6.02589 9.98867 6.04909 10.126 6.09937 10.2543C6.14964 10.3826 6.2259 10.4992 6.32335 10.5967C6.42081 10.6941 6.53736 10.7704 6.66568 10.8206C6.79401 10.8709 6.93134 10.8941 7.06906 10.8888C7.20678 10.8835 7.34191 10.8497 7.46597 10.7897C7.59004 10.7297 7.70036 10.6447 7.79 10.54C7.88297 10.4463 7.99357 10.3719 8.11543 10.3211C8.23729 10.2703 8.36799 10.2442 8.5 10.2442C8.63202 10.2442 8.76272 10.2703 8.88458 10.3211C9.00644 10.3719 9.11704 10.4463 9.21 10.54ZM17.62 9.13C17.0477 8.58699 16.2889 8.28428 15.5 8.28428C14.7111 8.28428 13.9523 8.58699 13.38 9.13C13.2162 9.3213 13.1306 9.56738 13.1403 9.81905C13.15 10.0707 13.2543 10.3095 13.4324 10.4876C13.6105 10.6657 13.8493 10.77 14.101 10.7797C14.3526 10.7894 14.5987 10.7038 14.79 10.54C14.883 10.4463 14.9936 10.3719 15.1154 10.3211C15.2373 10.2703 15.368 10.2442 15.5 10.2442C15.632 10.2442 15.7627 10.2703 15.8846 10.3211C16.0064 10.3719 16.117 10.4463 16.21 10.54C16.3974 10.7263 16.6508 10.8308 16.915 10.8308C17.1792 10.8308 17.4326 10.7263 17.62 10.54C17.8063 10.3526 17.9108 10.0992 17.9108 9.835C17.9108 9.57081 17.8063 9.31736 17.62 9.13ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z" fill="white">
                        </path>
                    </svg>
                </span>
                <div className="flex flex-col items-start gap-2">
                    <h3 className="text-xl font-extrabold text-dark-grey-900 font-display">
                        How can I track my website’s performance?
                    </h3>
                    <p className="text-base font-medium leading-7 text-dark-grey-600">
                        We integrate Google Analytics tools into your website, allowing you to monitor visitor behavior, track key performance metrics, and gain valuable insights to optimize your online presence.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-start col-span-1 gap-6 px-8 py-10 rounded-2xl bg-grey-200">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z">
                        </path>
                    </svg>
                </span>
                <div className="flex flex-col items-start gap-2">
                    <h3 className="text-xl font-extrabold text-dark-grey-900 font-display">
                        What kind of support do you provide after the website is launched?
                    </h3>
                    <p className="text-base font-medium leading-7 text-dark-grey-600">
                        We offer ongoing support and maintenance to ensure your website continues to perform optimally. This includes regular updates, security checks, and any technical assistance you may need.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="w-full draggable my-8">
        <div className="container flex flex-col mx-auto">
            <div className="flex flex-col items-center gap-6 mb-8 mt-8">
                <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
                    <a href="#!" className="text-gray-600 hover:text-gray-900">
                        Home
                    </a>
                    <a href="#!" className="text-gray-600 hover:text-gray-900">
                        Services
                    </a>
                    <a href="#!" className="text-gray-600 hover:text-gray-900">
                        Process
                    </a>
                    <a href="#!" className="text-gray-600 hover:text-gray-900">
                        FAQ
                    </a>
                    <a href="#!" className="text-gray-600 hover:text-gray-900">
                        Contact
                    </a>
                    <a href="#!" className="text-gray-600 hover:text-gray-900">
                        About
                    </a>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <p className="text-base font-normal leading-7 text-center text-grey-700">
                    2024 fleetscan. All rights reserved.
                </p>
            </div>
        </div>
    </div>
</div>
)
};