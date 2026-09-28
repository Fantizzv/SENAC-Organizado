package com.example.model;

public class Cliente extends Usuario {

    public Cliente(String nome, String documento) {
        super(nome, documento); // Chama o construtor da classe pai (Usuario)

    }


    @Override
    public void exibirDados() {
        super.exibirDados(); // Chama o método da classe pai (Usuario)
    }

    
}