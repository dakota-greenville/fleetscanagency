export default function Contact_us(){
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
                <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="index.html" data-type-link="linktopage">
                    Pricing
                </a>
                <a className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="index.html" data-type-link="linktopage">
                    FAQ
                </a>
            </div>
            <div className="items-center hidden gap-8 md:flex">
                <a className="flex items-center px-4 py-2 text-sm font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300" href="index.html" data-type-link="linktopage">
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
    <div className="w-full draggable">
        <div className="container flex flex-col items-center gap-16 mx-auto my-32">
            <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col w-10/12 gap-2 text-center mx-auto md:text-start md:ml-0">
                        <h3 className="text-4xl font-extrabold text-dark-grey-900 font-display">
                            Contact Us Today
                        </h3>
                        <p className="text-base font-medium leading-7 text-dark-grey-600">
                            Don't hesitate to reach out if you have any questions or need assistance. We're here to help with all your needs.
                        </p>
                    </div>
                    <div className="grid w-full grid-cols-2 gap-x-5 gap-y-16">
                        <div className="flex flex-col items-center gap-3 text-center md:text-start md:items-start">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M20.21 9.17135L14 3.13135C13.474 2.6312 12.7759 2.3523 12.05 2.3523C11.3241 2.3523 10.626 2.6312 10.1 3.13135L3.89 9.13135C3.61408 9.37221 3.39216 9.66866 3.23879 10.0013C3.08541 10.3339 3.00404 10.6951 3 11.0613V19.6413C3.01054 20.369 3.30904 21.0627 3.83012 21.5707C4.35119 22.0786 5.05235 22.3594 5.78 22.3513H18.22C18.9476 22.3594 19.6488 22.0786 20.1699 21.5707C20.691 21.0627 20.9895 20.369 21 19.6413V11.0613C20.9992 10.7098 20.929 10.3619 20.7935 10.0376C20.6579 9.71324 20.4596 9.41887 20.21 9.17135ZM11.44 4.57135C11.593 4.43151 11.7927 4.35397 12 4.35397C12.2073 4.35397 12.407 4.43151 12.56 4.57135L18 9.85135L12.53 15.1313C12.377 15.2712 12.1773 15.3487 11.97 15.3487C11.7627 15.3487 11.563 15.2712 11.41 15.1313L6 9.85135L11.44 4.57135ZM19 19.6413C18.9871 19.8376 18.8987 20.0213 18.7532 20.1537C18.6078 20.2861 18.4166 20.3569 18.22 20.3513H5.78C5.58338 20.3569 5.39225 20.2861 5.24678 20.1537C5.10132 20.0213 5.01286 19.8376 5 19.6413V11.7014L9.05 15.6013L7.39 17.2014C7.20375 17.3887 7.09921 17.6422 7.09921 17.9064C7.09921 18.1705 7.20375 18.424 7.39 18.6113C7.48295 18.7089 7.59463 18.7866 7.71836 18.8398C7.84208 18.8931 7.9753 18.9208 8.11 18.9213C8.36747 18.9203 8.61462 18.82 8.8 18.6413L10.57 16.9413C11.0096 17.21 11.5148 17.3521 12.03 17.3521C12.5452 17.3521 13.0504 17.21 13.49 16.9413L15.26 18.6413C15.4454 18.82 15.6925 18.9203 15.95 18.9213C16.0847 18.9208 16.2179 18.8931 16.3416 18.8398C16.4654 18.7866 16.5771 18.7089 16.67 18.6113C16.8563 18.424 16.9608 18.1705 16.9608 17.9064C16.9608 17.6422 16.8563 17.3887 16.67 17.2014L15 15.6013L19 11.7014V19.6413Z" fill="#1B2559">
                                    </path>
                                </svg>
                            </span>
                            <h3 className="text-2xl font-extrabold text-dark-grey-900 font-display">
                                Email
                            </h3>
                            <a className="text-lg font-bold text-purple-blue-500" href="mailto: dakota@fleetscan.io">
                                dakota@fleetscan.com
                            </a>
                        </div>
                        <div className="flex flex-col items-center gap-3 text-center md:text-start md:items-start">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M20.46 9.89026C20.3196 8.38969 19.8032 6.95202 18.9612 5.71727C18.1191 4.48251 16.9801 3.49274 15.655 2.84434C14.3299 2.19594 12.8639 1.911 11.3997 2.01728C9.93555 2.12356 8.52314 2.61743 7.3 3.45081C6.2492 4.17244 5.36706 5.12414 4.71695 6.23753C4.06684 7.35092 3.6649 8.59837 3.54 9.89026C3.41749 11.1737 3.57468 12.469 4.00017 13.6823C4.42567 14.8956 5.1088 15.9964 6 16.9049L11.3 22.3584C11.393 22.4546 11.5036 22.531 11.6254 22.5832C11.7473 22.6353 11.878 22.6622 12.01 22.6622C12.142 22.6622 12.2727 22.6353 12.3946 22.5832C12.5164 22.531 12.627 22.4546 12.72 22.3584L18 16.9049C18.8912 15.9964 19.5743 14.8956 19.9998 13.6823C20.4253 12.469 20.5825 11.1737 20.46 9.89026ZM16.6 15.4568L12 20.1811L7.4 15.4568C6.72209 14.7605 6.20281 13.9186 5.87947 12.9916C5.55614 12.0647 5.43679 11.0757 5.53 10.0957C5.62382 9.10059 5.93177 8.13935 6.43157 7.28145C6.93138 6.42356 7.61056 5.69045 8.42 5.13513C9.48095 4.41132 10.7263 4.02522 12 4.02522C13.2737 4.02522 14.5191 4.41132 15.58 5.13513C16.387 5.6883 17.0647 6.41817 17.5644 7.27231C18.064 8.12644 18.3733 9.08364 18.47 10.0751C18.5663 11.0584 18.4484 12.0514 18.125 12.9822C17.8016 13.9129 17.2807 14.7582 16.6 15.4568ZM12 6.16216C11.11 6.16216 10.24 6.43321 9.49994 6.94104C8.75992 7.44887 8.18314 8.17067 7.84255 9.01516C7.50195 9.85965 7.41284 10.7889 7.58647 11.6854C7.7601 12.5819 8.18869 13.4054 8.81802 14.0518C9.44736 14.6981 10.2492 15.1383 11.1221 15.3166C11.995 15.4949 12.8998 15.4034 13.7221 15.0536C14.5443 14.7038 15.2471 14.1114 15.7416 13.3514C16.2361 12.5914 16.5 11.6978 16.5 10.7838C16.4974 9.55888 16.0224 8.38493 15.1791 7.51879C14.3357 6.65266 13.1927 6.16487 12 6.16216ZM12 13.3513C11.5055 13.3513 11.0222 13.2008 10.6111 12.9186C10.2 12.6365 9.87952 12.2355 9.6903 11.7663C9.50109 11.2972 9.45158 10.7809 9.54804 10.2829C9.6445 9.78481 9.88261 9.32731 10.2322 8.96823C10.5819 8.60915 11.0273 8.36462 11.5123 8.26555C11.9972 8.16648 12.4999 8.21732 12.9567 8.41165C13.4135 8.60599 13.804 8.93508 14.0787 9.35731C14.3534 9.77955 14.5 10.276 14.5 10.7838C14.5 11.4647 14.2366 12.1178 13.7678 12.5993C13.2989 13.0808 12.663 13.3513 12 13.3513Z" fill="#1B2559">
                                    </path>
                                </svg>
                            </span>
                            <h3 className="text-2xl font-extrabold text-dark-grey-900 font-display">
                                Location
                            </h3>
                            <a className="text-lg font-bold text-purple-blue-500" target="_blank" href="https://goo.gl/maps/QcWzYETAh4FS3KTD7">
                                Lufkin, TX 75904
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 p-10 bg-white rounded-3xl shadow-main">
                    <h3 className="text-2xl font-bold text-dark-grey-900 font-display">
                        Send a message
                    </h3>
                    <form className="flex flex-col gap-6">
                        <label className="flex flex-col gap-2 text-sm font-medium text-dark-grey-700" htmlFor="first-name">
                            First Name
                            <input className="p-4 border border-solid outline-none rounded-xl placeholder:text-sm placeholder:font-medium placeholder:text-dark-grey-500 border-grey-500 focus:border-grey-600" placeholder="Your first name " type="text" id="first-name">
                            </input>
                        </label>
                        <label className="flex flex-col gap-2 text-sm font-medium text-dark-grey-700" htmlFor="email">
                            Your Email
                            <input className="p-4 border border-solid outline-none rounded-xl placeholder:text-sm placeholder:font-medium placeholder:text-dark-grey-500 border-grey-500 focus:border-grey-600" placeholder="Your email address " type="email" id="email">
                            </input>
                        </label>
                        <label className="flex flex-col gap-2 text-sm font-medium text-dark-grey-700" htmlFor="message">
                            Message
                            <textarea rows="5" className="p-4 border border-solid outline-none rounded-xl placeholder:text-sm placeholder:font-medium placeholder:text-dark-grey-500 border-grey-500 focus:border-grey-600" placeholder="Your message" id="message">
</textarea>
                        </label>
                        <button type="submit" className="flex items-center justify-center py-4 text-center text-white px-7 rounded-2xl bg-purple-blue-500 hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300">
                            Submit message
                        </button>
                    </form>
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
                        About
                    </a>
                    <a href="#!" className="text-gray-600 hover:text-gray-900">
                        Process
                    </a>
                    <a href="#!" className="text-gray-600 hover:text-gray-900">
                        Pricing
                    </a>
                    <a href="#!" className="text-gray-600 hover:text-gray-900">
                        FAQ
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