import { Request, Response } from "express";

export const getUserToAll = async (req: Request, res: Response): Promise<void>  => {
    res.status(200).send("estas en el get de user")
};

export const getUserId = async (req: Request, res: Response): Promise<void>  =>{
  res.status(200).send("estas en el get por id de user")
}

export const userRegister = async (req: Request, res: Response): Promise<void>  =>{
  res.status(200).send("estas en el register de users")
}

export const userLogin = async (req: Request, res: Response): Promise<void>  =>{
  res.status(200).send("estas en el login de users")
}