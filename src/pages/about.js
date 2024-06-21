export default function About(){
return (
<div>
    <div className="container flex flex-col mx-auto draggable">
        <div className="relative flex flex-wrap items-center justify-between w-full bg-white group py-7 shrink-0">
            <div>
                <img className="h-8" src="https://loopple.s3.eu-west-3.amazonaws.com/images/h2iKczFNnARZWYEMVEyckUYikBuWBgw5hrUlYTjz.svg">
                </img>
            </div>
            <div className="items-center justify-between hidden gap-12 text-black md:flex">
                <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="services.html" data-type-link="linktopage">
                    Services
                </a>
                <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="about_us.html" data-type-link="linktopage">
                    About
                </a>
                <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="index.html" data-type-link="linktopage">
                    Process
                </a>
                <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="#!">
                    Pricing
                </a>
                <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="#!">
                    FAQ
                </a>
            </div>
            <div className="items-center hidden gap-8 md:flex">
                <a className="flex items-center px-4 py-2 text-sm font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300" href="contact_us.html" data-type-link="linktopage">
                    Let's Talk
                </a>
            </div>
            <button className="flex md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" fill="black">
                    </path>
                </svg>
            </button>
            <div className="absolute flex md:hidden transition-all duration-300 ease-in-out flex-col items-start shadow-main justify-center w-full gap-3 overflow-hidden bg-white max-h-0 group-[.open]:py-4 px-4 rounded-2xl group-[.open]:max-h-64 top-full">
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
                <button className="flex items-center text-sm font-normal text-black">
                    Log In
                </button>
                <button className="flex items-center px-4 py-2 text-sm font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300">
                    Sign Up
                </button>
            </div>
        </div>
    </div>
    <div className="container mx-auto draggable my-12">
        <div className="flex flex-col items-start justify-center gap-y-20">
            <div className="flex flex-col">
                <h2 className="mb-4 text-3xl font-extrabold leading-tight lg:text-4xl text-dark-grey-900 font-display">
                    About Us
                </h2>
                <p className="text-lg md:w-9/12 text-grey-700">
                </p>
                <p>
                    <br>
                    </br>
                </p>
                <p>
                    At fleetscan, we are passionate about empowering small businesses with the online presence they deserve. Specializing in bespoke web design, we craft beautiful, functional websites that reflect your brand's identity and engage your target audience effectively.
                </p>
                <p>
                    <br>
                    </br>
                </p>
                <p>
                    Our comprehensive managed services cover every aspect of getting your business online, from domain registration and reliable hosting to professional custom email domains and powerful website analytics. We believe that price should not be a barrier to having a high-quality website, which is why we offer all our packages with $0 down and a minimum 12-month subscription.
                </p>
                <p>
                    <br>
                    </br>
                </p>
                <p>
                    Founded on the principle that every small business should thrive online, we take a hands-on approach to web development, creating each site from scratch to ensure superior quality and performance. Our team of experts is dedicated to delivering results that drive growth and success for your business.
                </p>
                <p>
                    Join us at Fleetscan and transform your online presence with a partner who understands the unique challenges and opportunities of small business web design. Let's work together to unlock your online potential.
                </p>
                <p>
                </p>
            </div>
        </div>
    </div>
    <div className="w-full draggable">
        <div className="container flex flex-col items-center gap-16 mx-auto my-16">
            <div className="grid w-full grid-cols-1">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-2 text-center md:text-start">
                        <h2 className="text-3xl font-extrabold md:text-4xl text-dark-grey-900 font-display">
                            Our Values
                        </h2>
                    </div>
                    <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-10">
                        <div className="flex flex-col items-start gap-1">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500 mb-2 mb-2">
                                <span className="text-base font-bold leading-7 text-white">
                                    1
                                </span>
                            </div>
                            <h3 className="text-base font-bold leading-tight text-dark-grey-900 font-display">
                                Quality
                            </h3>
                            <p className="text-base font-medium leading-7 text-dark-grey-600">
                                We are committed to delivering the highest quality in every aspect of our work, every single time.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500 mb-2">
                                <span className="text-base font-bold leading-7 text-white">
                                    2
                                </span>
                            </div>
                            <h3 className="text-base font-bold leading-tight text-dark-grey-900 font-display">
                                Affordability
                                <br>
                                </br>
                            </h3>
                            <p className="text-base font-medium leading-7 text-dark-grey-600">
                                We believe that every small business deserves access to top-notch web design services without breaking the bank.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500 mb-2">
                                <span className="text-base font-bold leading-7 text-white">
                                    3
                                </span>
                            </div>
                            <h3 className="text-base font-bold leading-tight text-dark-grey-900 font-display">
                                Integrity
                            </h3>
                            <p className="text-base font-medium leading-7 text-dark-grey-600">
                                We build trust with our clients by being straightforward about our processes, pricing, and timelines, ensuring you always know what to expect.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-blue-500 mb-2">
                                <span className="text-base font-bold leading-7 text-white">
                                    4
                                </span>
                            </div>
                            <h3 className="text-base font-bold leading-tight text-dark-grey-900 font-display">
                                Innovation
                            </h3>
                            <p className="text-base font-medium leading-7 text-dark-grey-600">
                                In a rapidly evolving digital landscape, we stay ahead of the curve by embracing the latest technologies and trends.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container mx-auto draggable my-16">
        <div className="flex flex-col items-start justify-center gap-y-20">
            <div className="flex flex-col">
                <h2 className="mb-4 text-3xl font-extrabold leading-tight lg:text-4xl text-dark-grey-900 font-display">
                    Who We Are
                </h2>
                <p className="text-lg md:w-9/12 text-grey-700">
                    Whether you're a professional, a team, or a business, Loopple offers a suite of tools and features that will help you achieve your goals faster and with greater ease.
                </p>
            </div>
            <div className="flex w-full gap-20">
                <div className="overflow-hidden lg:w-6/12">
                    <div className="h-full w-11/12 relative overflow-hidden rounded-3xl">
                        <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/feature-3-bg.jpeg" className="absolute top-0 left-0 w-full h-full object-cover" alt="image">
                        </img>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6 lg:w-6/12">
                    <div className="flex flex-row items-start col-span-1">
                        <div>

                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-medium text-grey-700">
                            </p>
                            <p>
                                I'm Dakota Greenville, a seasoned software engineer with a decade of experience in the transportation industry.
                            </p>
                            <p>
                                <br>
                                </br>
                            </p>
                            <p contenteditable="true">
                                Over the years, I've witnessed firsthand the challenges that new and smaller carriers face when competing with larger corporations. To address these needs, I founded fleetscan.
                            </p>
                            <p contenteditable="true">
                                <br>
                                </br>
                            </p>
                            <p>
                                fleetscan is dedicated to empowering small businesses with a strong online presence through bespoke web design and comprehensive managed services. By leveraging my industry knowledge and technical expertise, I aim to provide affordable, high-quality web solutions that help small carriers stand out and succeed in a competitive market.
                            </p>
                            <p>
                                <br>
                                </br>
                            </p>
                            <p>
                                I look forward to meeting you and joining your journey!
                            </p>
                            <p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-full bg-cover pb-8 pt-16 bg-left-bottom draggable" style={{backgroundImage: "url('https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/cta-3-bg.jpg')"}}>
        <div className="w-full bg-cover pb-8 pt-16 bg-left-bottom draggable" style={{backgroundImage: "url('https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/cta-3-bg.jpg')"}}>
            <div className="container mx-auto w-full flex justify-center">
                <div className="flex flex-col justify-center h-full my-auto text-center text-white lg:text-start lg:w-7/12 align-center">
                    <h2 className="mb-4 text-5xl font-extrabold leading-tight font-display">
                        Ready to Get Started?
                    </h2>
                    <p className="mb-10 text-lg font-medium">
                        Click the link below and get in touch!
                    </p>
                    <div className="flex items-center gap-4 mb-4 py-4 px-3 align-center">
                        <a className="flex items-center py-4 text-sm font-bold bg-white border border-white px-7 rounded-2xl text-dark-grey-900 hover:bg-gray-100 focus:ring-4 focus:ring-white-200 transition duration-300" href="contact_us.html" data-type-link="linktopage">
                            Let's Talk
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container mx-auto draggable">

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
}