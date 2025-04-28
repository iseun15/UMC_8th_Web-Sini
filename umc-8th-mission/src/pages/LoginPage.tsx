const handleSubmit = () => {

}

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className="flex flex-col gap-3">
                <input 
                    type={"email"} 
                    className={`border border-[#ccc] w-[300px] p-[10px] focus:border-[#807bff] rounded-sm`}
                    placeholder={"이메일"}
                />
                <input 
                    type={"password"} 
                    className={`border border-[#ccc] w-[300px] p-[10px] focus:border-[#807bff] rounded-sm`}
                    placeholder={"비밀번호"}
                />
                <button type="button" onClick={handleSubmit} disabled={false} 
                className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors cursors-pointer disabled:bg-gray-300">로그인</button>
            </div>
        </div>
    )
}

export default LoginPage