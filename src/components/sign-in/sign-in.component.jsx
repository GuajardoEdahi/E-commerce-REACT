import React from 'react';
import './signin.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle, auth} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state={

            email:'',
            password:'',

        }
    }



    handleSubmit =async event=>{

        event.preventDefault();

        const {email, password} = this.state

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
            
        }catch(error){
            console.error(error);

        }

    }

    handleChange=event=>{
        const {value,name}=event.target
        this.setState({[name]:value})

        console.log(this.state.email)
        console.log(this.state.password)

    }
    render(){
        return(
        <div className='sign-in'>
            <h2>I have already an account</h2>
            <span>Sign in your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                       name="email"
                       type="email"
                       value={this.state.email}
                       handleChange={this.handleChange}
                       label="Email"
                       required/>
                

                <FormInput
                      name="password" 
                      value={this.state.password} 
                      type="password"
                      handleChange={this.handleChange}
                      label="Password" 
                      required/>
                <div className='buttons'>
                <CustomButton type='submit' value='Submit'>
                    Sign in
                </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    Sign in with Google
                </CustomButton>
                </div>
              
            </form>
        </div>
        )}

}


export default SignIn