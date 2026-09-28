package com.example.main;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import com.example.model.Cliente;
import com.example.model.Pedido;
import com.example.model.Produto;
import com.example.model.ProdutoDigital;
import com.example.model.ProdutoFisico;

public class Main {
    public static void main(String[] args) {

        // PARTE 1 - FILA DE ATENDIMENTO
        ArrayList<Cliente> filaAtendimento = new ArrayList<>();

        Cliente c1 = new Cliente("Ana", "123456789");
        Cliente c2 = new Cliente("Bruno", "987654321");
        Cliente c3 = new Cliente("Carla", "456789123");

        // Adicionando à fila na ordem de chegada
        filaAtendimento.add(c1);
        filaAtendimento.add(c2);
        filaAtendimento.add(c3);

        // Atendendo o primeiro cliente da fila (índice 0)
        Cliente clienteAtendido = filaAtendimento.remove(0);

        System.out.println("--- PARTE 1: FILA DE ATENDIMENTO ---");
        System.out.println("Atendido agora: " + clienteAtendido.getNome());
        System.out.print("Aguardando na fila: ");
        for (Cliente c : filaAtendimento) {
            System.out.print(c.getNome() + " ");
        }
        System.out.println("\n");


        // PARTE 2 - PEDIDOS
        ProdutoFisico livroFisico = new ProdutoFisico(10, "Livro", 50.0, 1, 0.5, 10.0);
        ProdutoDigital notebook = new ProdutoDigital(20, "Notebook", 40.0, 2, 5.0);

        Pedido pedidoLivro = new Pedido(clienteAtendido, livroFisico, 1);
        Pedido pedidoNotebook = new Pedido(clienteAtendido, notebook, 2);
        double totalPedidos = pedidoLivro.calcularValorTotal() + pedidoNotebook.calcularValorTotal();

        System.out.println("--- PARTE 2: PEDIDO ---");
        System.out.println("Cliente dos pedidos: " + clienteAtendido.getNome());
        System.out.println("Livro: " + pedidoLivro.getQuantidade() + " unidade(s) - R$ " + pedidoLivro.calcularValorTotal());
        System.out.println("Notebook: " + pedidoNotebook.getQuantidade() + " unidade(s) - R$ " + pedidoNotebook.calcularValorTotal());
        System.out.println("Total dos pedidos: R$ " + totalPedidos);
        System.out.println();


        // PARTE 3 - HISTÓRICO
        ArrayList<String> historico = new ArrayList<>();


        // Registrando os itens específicos no histórico:
        historico.add("Item adicionado: " + livroFisico.getNome() + " (Qtd: " + pedidoLivro.getQuantidade() + ")");
        historico.add("Item adicionado: " + notebook.getNome() + " (Qtd: " + pedidoNotebook.getQuantidade() + ")");
        historico.add("Pedidos finalizados para " + clienteAtendido.getNome() + " no valor total de R$ " + totalPedidos);

        System.out.println("--- PARTE 3: HISTÓRICO ---");
        for (String resumoItens : historico) {
            System.out.println("- " + resumoItens);
        }

        // PARTE 4 - MAPA DE PRODUTOS
        Map<Integer, Produto> map = new HashMap<>(); 
        Produto mouse = new Produto (01, "Mouse", 100.0, 1);
        Produto teclado = new Produto (02, "Teclado", 150.0, 1);

        map.put(mouse.getCodigo(), mouse);
        map.put(teclado.getCodigo(), teclado);

        Produto produtoBuscado1 = map.get(mouse.getCodigo());
        Produto produtoBuscado2 = map.get(teclado.getCodigo());

        if(map.containsKey(01) && map.containsKey(02)) {
            System.out.print("Produto encontrado no mapa: ");
        } else {
            System.out.println("Produto não encontrado no mapa.");
        }

        Set<String> documentos = new HashSet<>();

        documentos.add("123,321,123,12");
        documentos.add("676,967,011,21");
        documentos.add("600,329,630,50");
        documentos.add("098,765,432,10");

        for(String governo : documentos) {
            System.out.println(governo);
        }
    }
}