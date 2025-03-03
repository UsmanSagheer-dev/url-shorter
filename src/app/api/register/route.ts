import { NextResponse, NextRequest } from "next/server";

interface RegisterRequestBody {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export async function POST(req: NextRequest) {
    try {
        const { name, email, password, confirmPassword } = await req.json() as RegisterRequestBody;
        
        if (!name || !email || !password || !confirmPassword) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        if (password !== confirmPassword) {
            return NextResponse.json(
                { message: "Passwords do not match" },
                { status: 400 }
            );
        }

        console.log('name:', name);
        console.log('email:', email);
        console.log('password:', password);
        console.log('confirmPassword:', confirmPassword);

        return NextResponse.json(
            { message: "Register success" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { message: "Register failed" },
            { status: 400 }
        );
    }
}