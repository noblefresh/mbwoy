import { FaAngleLeft } from "react-icons/fa6";
const AboutMbwoy = ({ goBack, openModal }) => {

    return (
        <div className="flex flex-col h-full">
            <div className="text-center dark:text-white-1 md:hidden py-4 relative">
                <div onClick={() => goBack()} className="absolute p-2 top-3 cursor-pointer"><FaAngleLeft /></div>
                <div className="">About Mbwoy</div>
            </div>
            <div className="hidden md:block dark:border-gray-500 border-[#CED2DA] border-b pb-4 mb-4">
                <div className='flex items-center pt-5 lg:pt-0'>
                    <div onClick={() => goBack()} className="p-2 lg:hidden top-3 cursor-pointer"><FaAngleLeft /></div>
                    <span className="text-[18px] dark:text-white-1 font-semibold">About Mbwoy</span>
                </div>
            </div>

            <div className="px-4 space-y-6 pt-5 flex-grow md:px-0 md:w-[65%]">
                <iframe
                    src="https://hrms-sandy.vercel.app/"
                    sandbox="allow-scripts"
                    loading="lazy"
                    aria-hidden="false"
                    className="w-full h-screen"
                    tabindex="0"
                ></iframe>
            </div>
        </div>
    );
};

export default AboutMbwoy;
