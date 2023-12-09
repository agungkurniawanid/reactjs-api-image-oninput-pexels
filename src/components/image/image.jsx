const AnimalImage = (props) => {
    const { src } = props;
    return (
        <img
            src={src}
            alt="Animal Image"
            className="w-[300px] h-[300px] object-cover rounded-[20px]"
        />
    )
}
export default AnimalImage;