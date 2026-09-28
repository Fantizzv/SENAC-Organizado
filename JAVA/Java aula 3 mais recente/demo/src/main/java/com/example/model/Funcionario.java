package com.example.model;

public class Funcionario extends Usuario {
    private final int matricula;
    private static int totalFuncionarios;

    public Funcionario(String nome, String documento) {
        super(nome, documento);
        matricula = ++totalFuncionarios; // Inicializa com um valor padrão
    }

    public int getMatricula() {
        return matricula;
    }
    
}