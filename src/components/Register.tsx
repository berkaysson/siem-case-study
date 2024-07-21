import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerSchema } from "../utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, InputError } from "./ui/Input";
import Button from "./ui/Button";
import { CardForm, FormGroup } from "./ui/CardForm";
import { UserPlus } from "lucide-react";

type RegisterFormData = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
  const { register: authRegister } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await authRegister(data.username, data.password);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <CardForm>
      <h1>Create new account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <label>Username</label>
          <Input type="text" {...register("username")} placeholder="Username" />
          {errors.username && (
            <InputError>{errors.username.message}</InputError>
          )}

          <label>Password</label>
          <Input
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          {errors.password && (
            <InputError>{errors.password.message}</InputError>
          )}

          <label>Confirm Password</label>
          <Input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <InputError>{errors.confirmPassword.message}</InputError>
          )}

          <Button icon={<UserPlus size={16} />} type="submit" fullWidth>
            Register
          </Button>
        </FormGroup>
      </form>
      <p className="link">
        <Link to="/login">Already have an account? </Link>
      </p>
    </CardForm>
  );
};

export default Register;
