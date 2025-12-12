import { OutlineButton } from "../common/button"
import { Input } from "../ui/input"

const TabHeader = () => {
    return (
      <div className='w-full flex flex-col items-start gap-2 sm:flex-row sm:items-center justify-between'>
        <h1 className='text-white text-xl font-semibold'>Players</h1>
        <div className='flex items-center justify-between gap-2'>
          <Input className='w-full max-w-md border border-gray-800 text-white' type={'text'} placeholder='Search Player' />
          <div className='flex items-center justify-between gap-2'>
            <OutlineButton>
              All Positions
            </OutlineButton>
            <OutlineButton>
              All Positions
            </OutlineButton>
          </div>
        </div>
      </div>
    )
  }

  
export default TabHeader