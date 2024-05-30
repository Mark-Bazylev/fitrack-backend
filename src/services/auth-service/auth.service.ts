import supabase from "../../supabase/supabase";


export interface UserRequestBody {
    email: string;
    password: string;
}
class AuthService{

    public async register(registerParams:UserRequestBody){
        const {email,password} = registerParams
        const {data,error} = await supabase.auth.signUp({email,password})
        if(error){
            throw new Error(error.message)
        }
        return data
    }
}

export const authService = new AuthService();
