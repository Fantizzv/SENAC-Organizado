
package com.example.model;

public class Usuario {
    private String nome;
    private String documento;

    public Usuario(String nome, String documento) {
        this.nome = nome;
        this.documento = documento;        
    }

    public String getDocumento() {
        return documento;
    }

    public String getNome() {
        return nome;
    }

    public void exibirDados() {
        System.out.println("Nome: " + nome + " - Documento: " + documento);
    }
}
