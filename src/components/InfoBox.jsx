export default function InfoBox(props) {
    return (
        <>
        {
            !props.horizontal &&

        <div className='flex flex-col gap-4'>
            <div className="flex justify-center">
                <div className='w-[90px] h-[90px] absolute bg-highlight2 opacity-50 rounded-3xl' />
                <img className='w-[90px]' src={`/icons/${props.icon}.png`} alt={props.icon}/>
            </div>
            <div>
                <h5 className='text-highlight1 font-bold'>{props.title}</h5>
                <p>{props.description}</p>
            </div>
        </div>
        }
        {
            props.horizontal &&
        
        <div className='flex gap-4'>
            <div className="">
                <div className='w-[80px] h-[80px] absolute bg-highlight2 opacity-50 rounded-3xl' />
                <img className='w-[80px]' src={`/icons/${props.icon}.png`} alt={props.icon}/>
            </div>
            <div>
                <h5 className='text-highlight1 font-bold'>{props.title}</h5>
                <p>{props.description}</p>
            </div>
        </div>
        }
        </>
    )
}