package com.example.demo.services.scheduledtask;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.example.demo.models.Article;
import com.example.demo.models.Message;
import com.example.demo.repositories.ArticleRepository;
import com.example.demo.repositories.MessageRepository;

@Service
public class ScheduledTaskService implements IScheduledTaskService {
    @Autowired
    private final ArticleRepository articleRepository;
    @Autowired
    private final MessageRepository messageRepository;

    public ScheduledTaskService(ArticleRepository articleRepository, MessageRepository messageRepository,
            MessageRepository messageRepository2) {
        this.articleRepository = articleRepository;
        this.messageRepository = messageRepository2;

    }

    @Override
    @Scheduled(cron = "0 0 8 * * *")
    public void CheckStockEpouisee() {
        List<Article> articles = articleRepository.findByQuantiteLessThanEqual(10);
        for (Article article : articles) {
            Message message = new Message();
            message.setEstLu(false);
            message.setContenu("Article : " + article.getNom() +
                    "\nL'article " + article.getNom() + " est actuellement en rupture de stock." +
                    "\nNous vous recommandons de prendre les mesures suivantes :" +
                    "\n\n1. Notifier le fournisseur pour un réapprovisionnement rapide." +
                    "\n2. Vérifier les alternatives disponibles pour proposer des articles similaires." +
                    "\n3. Suivre les notifications pour être informé lorsque l'article sera de nouveau disponible." +
                    "\n\nNous vous tiendrons informé(e) dès que l’article sera réapprovisionné.");
            message.setTitre("Article " + article.getNom() + " est actuellement en rupture de stock.");
            messageRepository.save(message);
        }

    }

}
