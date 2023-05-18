import './FormDemo1.css';
import {useForm} from 'react-hook-form';

function FormDemo1(){

    let { register,handleSubmit,formState:{errors}}=useForm();

    

    function onSubmit(userObj){
        console.log(userObj)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
             {/* username */}
             <div className="mb-3">
                <label className="form-label" htmlFor='username'>Username</label>
                <input type="text"  id="username" className="form-control" {...register("username",{required:true,minLength:4,maxLength:6})} />
                {/* username validation error messages */}
                { errors.username?.type==='required' && <p className='text-danger'>Username is required</p>}
                { errors.username?.type==='minLength' && <p className='text-danger'>Min length is 4 chars</p>}
                { errors.username?.type==='maxLength' && <p className='text-danger'>Max length is 6 chars</p>}
             </div>
             {/* date of birth */}
             <div className="mb-3">
                <label className="form-label" htmlFor='dob'>Date of birth</label>
                <input type="date"  id="dob" className="form-control" {...register("dob")} />
             </div>

              {/* age*/}
              <div className="mb-3">
                <label className="form-label" htmlFor='age'>Age</label>
                <input type="number"  id="age" className="form-control" {...register("age",{min:15,max:30})} />
                {/* age validation error messages */}
                {errors.age?.type==='min' && <p className='text-danger'>Min age should be 15</p>}
                {errors.age?.type==='max' && <p className='text-danger'>Max age should be less than 30</p>}
             </div>
             {/* skills */}
             <div className="mb-3">
                <label>Select a skill</label>
                <select  className="form-select" {...register("skill")}>
                    <option value="js">JavaScript</option>
                    <option value="angular">Angular</option>
                    <option value="nodejs">Nodejs</option>
                </select>
             </div>

             {/* gender */}
             <div className="mb-3">
                <label>Choose gender</label>
                {/* male */}
                <div className="form-check">
                    <input type="radio" id="male" className="form-check-input" value="male" {...register("gender")} />
                    <label htmlFor="male" className="form-check-label">Male</label>
                </div>
                {/* female */}
                <div className="form-check">
                    <input type="radio"  id="female" className="form-check-input"  value="female" {...register("gender") }/>
                    <label htmlFor="female" className="form-check-label">Female</label>
                </div>
             </div>

             {/* skills */}
             <div className="mb-3">
                <label>Select your skills</label>
                {/* eating */}
                <div className="from-check">
                    <input type="checkbox" id="eating" className="form-check-input" {...register("eating")} />
                    <label htmlFor="eating" className="form-check-label">Eating</label>
                </div>
                {/* running */}
                <div className="from-check">
                    <input type="checkbox" id="running" className="form-check-input" {...register("running")} />
                    <label htmlFor="running" className="form-check-label">Running</label>
                </div>
                {/* sleeping */}
                <div className="from-check">
                    <input type="checkbox" id="sleeping" className="form-check-input" {...register("sleeping")} />
                    <label htmlFor="sleeping" className="form-check-label">Sleeping</label>
                </div>
             </div>
             {/* feedback */}
             <div className="mb-3">
                <label className="form-label" htmlFor='feedback'>Feedback</label>
                <textarea id="feedback"  rows="5" className="form-control" {...register('feedback')}></textarea>
             </div>
             {/* submit */}
             <button type="submit" className="btn btn-success">Regsiter</button>
        </form>
    )
}

export default FormDemo1;