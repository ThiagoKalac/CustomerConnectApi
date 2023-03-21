import { response, Router } from "express";

const clientRouters = Router();

clientRouters.get("", (req, res) => res.json("get funcionando"));
clientRouters.post("", (req, res) => res.json("post funcionando"));
clientRouters.patch("/:id", (req, res) => res.json("patch funcionando"));
clientRouters.delete("/:id", (req, res) => res.json("delete funcionando"));

export {clientRouters}