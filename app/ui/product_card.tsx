

export type ProductCardProps = {
    image: string;
    name: string;
    description: string;
    quantity: number;
    id: number;
    onedit: () => void;
    ondelete: () => void;
} 

export default function ProductCard(props: ProductCardProps) {
    return (
        <div className="flex items-center justify-between relative border-2 border-black border-solid rounded-lg bg-gray-100 mt-12 w-11/12">
            <div>
                <img src={props.image} alt="Product" width={100} height={200} />     
            </div>
            <div>
                <h2 className="font-bold text-md sm:text-2xl text-black">Name: {props.name}</h2>
                <h2 className="font-bold text-md sm:text-2xl text-black">Description: {props.description}</h2>
                <h2 className="font-bold text-md sm:text-2xl text-black">Quantity: {props.quantity}</h2>
            </div>
            <div className="flex flex-col items-center justify-center">
                <button type="button" onClick={props.onedit} className="border-solid border-2 border-black hover:text-black text-white font-bold mr-5 p-2 mb-2 hover:bg-gray-300 bg-green-400">Edit</button>
                <button type="button" onClick={props.ondelete} className="border-solid border-2 border-black bg-red-600 hover:text-black text-white mr-5 p-2 font-bold hover:bg-gray-300">Delete</button>
            </div>

        </div>
    )
}