

function Resigter() {
  return (
    <div>Resigter</div>
  )
}

export default Resigter



{/* <button className="w-full btn btn-outline ">Default</button> */}
      {/* <label className="w-full max-w-xs mx-auto form-control">
          <div className="label">
            <span className="label-text">Dob?</span>
            <span className="label-text-alt">Top Right label</span>
          </div>
          <input type="date" {...register('age')} placeholder="Type here" className="w-full max-w-xs input input-bordered" />
          <div className="label">
            <span className="label-text-alt">{errors.age && <span className="text-red-600">{errors.age.message}</span>}</span>
            <span className="label-text-alt">Bottom Right label</span>
          </div>
      </label> */}
      {/* <label className="w-full max-w-xs mx-auto form-control">
          <div className="label">
            <span className="label-text">Dob?</span>
            <span className="label-text-alt">Top Right label</span>
          </div>
          <button className="flex btn btn-outline input-bordered btn-primary"><DayPicker 
          mode='single'
          /> <SlCalender/></button>
          <div className="label">
            <span className="label-text-alt">{errors.age && <span className="text-red-600">{errors.age.message}</span>}</span>
            <span className="label-text-alt">Bottom Right label</span>
          </div>
      </label> */}


      {/* <div className="block mx-auto dropdown ">
          <div tabIndex={0} role="button" className="w-full max-w-xs m-1 btn btn-outline">
            {selected? <p> {format(selected, 'PPP')}.</p>:<p className='flex gap-4 justify-items-stretch'>Date of birth <SlCalender/></p>}
            </div>
          <div tabIndex={0} className="dropdown-content z-[1] card card-compact max-w-xs p-0 shadow bg-primary text-primary-content">
            <div className="card-body">
              
              <DayPicker
              
              {...register('age')}
              mode="single"
              captionLayout="dropdown-buttons"
              fromYear={1915} toYear={2055}
              selected={selected}
              onSelect={setSelected}
              className='p-0 m-0'
              footer={footer}
              />
              
            </div>
            
          </div>
          
      </div>
      {errors.age && <span role='error'>{errors.age.message}</span>} */}