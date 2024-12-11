import React, { useState } from "react";

const Contato = () => {
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        mensagem: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappNumber = "559123456789"; // Substitua pelo número do WhatsApp com código do país e DDD
        const { nome, telefone, mensagem } = formData;

        const whatsappMessage = `Olá! Meu nome é ${nome}. Meu telefone é ${telefone}. Gostaria de entrar em contato com a seguinte mensagem: ${mensagem}`;

        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappLink, "_blank");

        setFormData({ nome: "", telefone: "", mensagem: "" }); // Limpa o formulário após o envio
    };

    return (
        <div className="container" style={{ maxWidth: "600px", margin: "50px auto" }}>
            <h1>Entre em Contato</h1>
            <p>Preencha o formulário abaixo para nos enviar uma mensagem pelo WhatsApp:</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        className="form-control"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        className="form-control"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        className="form-control"
                        rows="5"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">
                    Enviar pelo WhatsApp
                </button>
            </form>
        </div>
    );
};

export default Contato;
