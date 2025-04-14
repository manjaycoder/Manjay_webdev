import { useState } from "react"
import {FaCamera} from "react-icons/fa"
const Profile = () => {
    const [bannerUrl,setBannerUrl]=useState("https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8");
    const [profileUrl,setProfileUrl]=useState("https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8")

    const HandleChange=(event:any)=>{
        const file=event.target.files[0]
        if(file){
            setBannerUrl(URL.createObjectURL(file))
        }

    }
    const handleChange=(event:any)=>{
        const file=event.target.file[0]
        if(file){
            setProfileUrl(URL.createObjectURL(file))
        }
    }
  return (
    <div className="relative w-[94%] ml-[5rem]">
        <div className="relative">
            <img src={bannerUrl} alt="backgroud" className="w-full h-60 object-cover " />
            <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hober:bg-gray-600" >
                <label htmlFor="banner-upload"  className="cursor-pointer" >
                    <FaCamera size={24}/>
                </label>
                <input type="file" id="banner-upload" accept="image/*" className="hidden" onChange={HandleChange} />
            </button>
        </div>
        <div className="flex items-center ml-4 mt-[2rem] ">
            <img src={profileUrl} alt="Channel-logp"className="w-40 h-40 object-cover rounded-full border-white relative" />
            <button className="absolute ml-[3.6rem] mt-[10rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600  ">
                <label htmlFor="profile-upload" className="cursor-pointer" >
                <FaCamera size={24}/>
                </label>
                <input type="file" id="profile-upload" accept="image/*" className="hidden" onChange={handleChange} />
            </button>
            <div className="ml-4 mt-4">
                <h1 className="text-4xl font-bold ml-[4rem] pr-10">Manjay WebDev</h1>
                <p className="ml-[4rem]" >1M views</p>
                <p className="mt-2 ml-[4rem]">
                    This is a short description of the channel. its gives an overviews of the content and what viewer can expect.
                </p>
                <button className="ml-[4rem] mt-4 bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-500">
                    Subscribe
                </button>
            </div>
        </div>

    </div>
  )
}

export default Profile