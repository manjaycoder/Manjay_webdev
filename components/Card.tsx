interface CardProps{
    title:string,
    description:string,
    image:string,
    // link:string,
}
const Card = ({title,description,image}:CardProps) => {
  return (
    <div className="w-sm mx-auto m-[1rem] rounded-lg shadow-md overflow-hidden h-[35%]" >
        <img src={image} alt={title} className="max-w-full h-50 object-cover fit " />
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <a href={""} className="inline-block px-4 py-2 bg-white text-black font-semibold roundedlg shadow hover:bg-gray-600 hover:text-white transition duration-200 "   >Learn More</a>
        </div>
    </div>
  )
}

export default Card