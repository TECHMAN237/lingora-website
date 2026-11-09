# LINGORA AI — Website Content & Project Brief
Version: 1.0  
Date: 9 novembre 2026  
Document de référence pour la conception et le développement du site web de Lingora AI.

---

## 1. Présentation du projet

**Nom :** Lingora AI  
**Secteur :** intelligence artificielle, traduction vocale, communication multilingue et technologies conversationnelles.  
**Signature proposée :** “Speak freely. Understand everyone.”  
**Statut de la signature :** proposition provisoire, à ne pas présenter comme une signature définitivement validée.

Lingora AI ambitionne de permettre à des personnes qui ne parlent pas la même langue de communiquer naturellement en temps réel. La solution doit écouter, comprendre, traduire et restituer les paroles dans la langue de l'interlocuteur.

Le positionnement est celui d'une expérience de communication vocale multilingue assistée par l'IA. Le projet commence par une application mobile et pourrait évoluer plus tard vers un écosystème comprenant des écouteurs traducteurs intelligents.

## 2. Problème

Les barrières linguistiques compliquent les conversations personnelles, les voyages, les études, le commerce, les réunions professionnelles et l'accès à certains services.

Les outils qui se limitent à traduire du texte ne répondent pas toujours au besoin d'une conversation orale fluide. Lingora AI veut rendre les échanges entre personnes parlant des langues différentes plus simples et plus naturels.

## 3. Proposition de valeur

**Promesse centrale à exprimer avec prudence :** aider deux personnes parlant des langues différentes à se comprendre grâce à une traduction vocale bidirectionnelle assistée par l'IA.

Exemple principal :
- Une personne parle français.
- Son interlocuteur parle anglais.
- Lingora AI traite la parole, traduit le message et restitue une version audio dans la langue cible.
- L'interlocuteur répond en anglais et le processus fonctionne dans l'autre sens.

Ne jamais promettre une traduction parfaite, une latence nulle ou une prise en charge linguistique qui n'a pas été validée.

## 4. Fonctionnement envisagé

1. L'utilisateur parle dans le microphone de son téléphone.
2. Le système capture et traite la voix.
3. Une technologie de reconnaissance vocale (Speech-to-Text) peut convertir la parole en texte.
4. Un moteur de traduction IA restitue le sens dans la langue cible en tenant compte du contexte.
5. Un moteur de synthèse vocale (Text-to-Speech) génère l'audio dans la langue cible.
6. L'interlocuteur écoute la traduction.
7. Il répond dans sa propre langue et le système traduit sa réponse en retour.

La sélection de la langue de chaque interlocuteur fait partie des fonctions prioritaires. La détection automatique de la langue et une gestion avancée des interruptions sont des pistes d'évolution, pas des fonctionnalités à annoncer comme déjà disponibles.

## 5. Périmètre produit et roadmap

### Phase 1 — MVP mobile

Le premier produit visé est une application mobile permettant à deux personnes de communiquer vocalement dans des langues différentes.

Fonctionnalités prioritaires prévues :
- Sélection de la langue de chaque interlocuteur.
- Capture et restitution de la voix.
- Traduction bidirectionnelle.
- Lecture audio naturelle.
- Interface de conversation claire.
- Indication de l'état d'écoute et de traduction.
- Gestion des erreurs, du réseau et des interruptions.
- Gestion des permissions du microphone et de la confidentialité.

**Langues de départ :** français et anglais.  
**Point de départ du marché :** Cameroun, où les échanges français-anglais constituent un premier cas d'usage pertinent. Le produit doit toutefois avoir une identité visuelle et une présentation capables d'évoluer vers un marché international.

L'historique avancé, les profils vocaux personnalisés et les modes spécialisés sont secondaires et devront être priorisés selon les retours des utilisateurs.

### Phase 2 — Amélioration de l'expérience

Optimiser :
- La latence de bout en bout.
- La précision de la traduction.
- La qualité et le naturel de l'audio.
- La consommation de données.
- La robustesse dans les environnements bruyants.
- La gestion des conversations réelles et des interruptions.

### Phase 3 — Expansion linguistique et professionnelle

Étudier l'ajout de langues et d'accents moins bien desservis, notamment sur les marchés africains. Les langues africaines sont une piste à valider par des tests réels.

Segments professionnels à explorer :
- Commerce.
- Tourisme et accueil.
- Éducation.
- Réunions et événements internationaux.
- Service client.

Ces segments sont des hypothèses de marché, pas des marchés déjà validés.

### Phase 4 — Écouteurs traducteurs

Après validation du marché logiciel, étudier des écouteurs connectés capables de transmettre et de restituer les traductions. Le téléphone pourrait initialement servir de hub de connexion et de calcul.

La fabrication d'un matériel propriétaire n'est pas une priorité avant la validation de la demande et du modèle économique.

## 6. Publics et cas d'usage à présenter

Présenter les publics comme des personnes auxquelles le produit pourrait être utile, sans prétendre qu'ils sont déjà clients.

- **Voyageurs :** échanger plus facilement avec des personnes parlant une autre langue.
- **Étudiants :** faciliter certaines interactions dans un environnement académique multilingue.
- **Commerçants et entrepreneurs :** communiquer avec des clients ou partenaires parlant une autre langue.
- **Professionnels du tourisme :** faciliter l'accueil et les échanges.
- **Équipes et entreprises :** rendre les conversations multilingues plus accessibles.
- **Événements internationaux :** aider les participants à se comprendre.

## 7. Principes technologiques

L'architecture est encore à évaluer. Les composants possibles sont :
- Application mobile, avec React Native et Expo comme options à évaluer.
- Backend chargé d'orchestrer les sessions et les services vocaux.
- Reconnaissance vocale (Speech-to-Text).
- Moteur de traduction et de compréhension contextuelle.
- Synthèse vocale (Text-to-Speech), avec notamment l'évaluation d'ElevenLabs.
- Streaming lorsque cela est pertinent.
- Base de données pour les comptes et les données strictement nécessaires.
- Sécurité, confidentialité, suivi des coûts et limitation d'usage.

Aucun fournisseur ni aucune architecture ne doit être présenté comme définitivement choisi sans confirmation. Les choix doivent être comparés selon la latence, la qualité linguistique, les langues prises en charge, les coûts, les conditions d'utilisation et la confidentialité.

Un frontend a déjà été conçu dans un travail antérieur. Si le code source est présent dans le workspace, l'inspecter avant toute refonte et privilégier sa réutilisation lorsque sa qualité le permet. Ne pas supposer qu'un frontend, un backend ou une application sont terminés sans vérifier les fichiers.

## 8. Modèle économique — pistes à ne pas présenter comme décisions finales

Modèles à étudier :
- Freemium avec quotas.
- Abonnement individuel.
- Abonnement professionnel.
- Paiement à l'usage pour les entreprises.
- API ou intégrations professionnelles si la demande le justifie.
- Éventuellement, vente d'écouteurs à un stade ultérieur.

Aucun prix, quota, chiffre de marché, nombre d'utilisateurs ou revenu ne doit être inventé ou affiché comme réel.

## 9. Identité visuelle et direction artistique

Direction envisagée :
- **Bleu électrique** : accent, énergie technologique et interactions principales.
- **Bleu nuit** : profondeur, confiance et fonds premium.
- **Blanc** : lisibilité, espace et simplicité.

L'esthétique recherchée est :
- Technologique, premium et moderne.
- Humaine et accessible, jamais froide ou excessivement futuriste.
- Épurée, avec une hiérarchie visuelle nette.
- Orientée produit, avec des exemples visuels de conversations et de traduction vocale.
- Cohérente sur mobile, tablette et desktop.

Piste de logo : onde sonore associée à deux bulles de conversation ou à un symbole de connexion. Il s'agit d'une direction exploratoire, pas d'un logo final imposé.

Les visuels doivent représenter des situations humaines crédibles : deux personnes qui se comprennent, voyages, échanges professionnels et conversations du quotidien. Éviter les images artificielles, les clichés futuristes et les interfaces fictives qui prétendent montrer un produit existant.

## 10. Ton éditorial

- Clair, confiant, humain et accessible.
- Moderne et international, sans jargon inutile.
- Axé sur le bénéfice utilisateur et les conversations réelles.
- Éviter les superlatifs non démontrés : « parfait », « instantané », « zéro latence », « toutes les langues », etc.
- Distinguer clairement ce qui est prévu, ce qui est en développement et ce qui est déjà disponible.

Exemples de formulations prudentes :
- « Faites tomber les barrières linguistiques. »
- « Et si la langue ne faisait plus obstacle à la conversation ? »
- « Une nouvelle façon d'imaginer les conversations multilingues. »
- « Français ↔ English : notre premier cas d'usage. »
- « Conçu pour rendre les échanges entre langues plus simples. »

## 11. Contenu et sections recommandés pour le site

Le site est un site de présentation/marketing du projet, pas une application de traduction fonctionnelle. Ne simulez pas une fonctionnalité réelle qui n'existe pas.

### A. Navigation
- Logo Lingora AI.
- Accueil.
- Comment ça marche.
- Cas d'utilisation.
- Vision / À propos.
- FAQ.
- Bouton d'action principal : « Rejoindre la liste d'attente » ou « Être informé du lancement ».

### B. Hero / première section
Objectif : expliquer immédiatement le bénéfice.

Titre possible :
**« La langue ne devrait jamais être une barrière. »**

Sous-titre possible :
« Lingora AI imagine une nouvelle façon de communiquer : des conversations vocales assistées par l'IA, pour mieux se comprendre d'une langue à l'autre. »

CTA principal :
**« Rejoindre la liste d'attente »**

CTA secondaire :
**« Découvrir comment ça marche »**

Mention facultative :
« Première étape : les conversations français–anglais. »

### C. Démonstration du concept
Montrer une conversation illustrative :
- Personne A — Français : « Bonjour, pouvez-vous m'aider ? »
- Traduction audio illustrative — English : « Hello, can you help me? »
- Personne B — English : « Of course. What do you need? »
- Traduction audio illustrative — Français : « Bien sûr. De quoi avez-vous besoin ? »

Cette démonstration doit être identifiée comme une illustration du concept, pas comme une capture d'une application déjà disponible.

### D. Comment ça marche
Présenter en 3 ou 4 étapes :
1. Parlez naturellement.
2. Lingora AI traite et traduit votre message.
3. Votre interlocuteur écoute la traduction.
4. La conversation continue dans l'autre langue.

### E. Cas d'utilisation
Présenter les voyageurs, étudiants, commerçants/entrepreneurs, professionnels et événements internationaux.

### F. Vision produit
Expliquer la progression :
1. Application mobile français–anglais.
2. Amélioration de la fluidité, de la qualité et de la fiabilité.
3. Exploration de nouvelles langues et d'usages professionnels.
4. Recherche éventuelle autour d'écouteurs traducteurs, après validation du produit logiciel.

### G. FAQ
Questions possibles :
- Qu'est-ce que Lingora AI ?
- Comment fonctionne la traduction vocale bidirectionnelle ?
- Quelles langues seront prises en charge au lancement ?
- Lingora AI est-il déjà disponible ?
- Sur quelles plateformes le produit est-il prévu ?
- Comment être informé du lancement ?
- Mes conversations seront-elles privées ?

Répondre honnêtement. Pour les questions dont la réponse n'est pas encore définie, dire que les détails seront communiqués à mesure que le produit avance. Ne pas inventer une politique de confidentialité ou des garanties techniques.

### H. Liste d'attente / contact
Prévoir une section d'inscription à la liste d'attente, mais ne pas inventer de backend, d'adresse email, de numéro WhatsApp ou de lien externe.
Si aucun service de formulaire n'est configuré :
- construire une interface de formulaire propre ;
- isoler la soumission derrière une fonction ou une configuration facile à connecter ;
- afficher clairement en développement ou utiliser un état de démonstration non trompeur ;
- ne jamais afficher un message « inscription réussie » si les données n'ont pas réellement été enregistrées.

Champs suggérés, à confirmer :
- Prénom ou nom.
- Adresse e-mail.
- Langue principale.
- Langue avec laquelle la personne souhaite communiquer.
- Type d'utilisateur (facultatif).

### I. Footer
- Logo et courte description.
- Liens de navigation.
- Liens vers les réseaux sociaux uniquement si leurs URL sont fournies.
- Contact uniquement si les coordonnées sont fournies.
- Mentions légales et politique de confidentialité uniquement lorsqu'elles existent réellement ; ne pas inventer de société enregistrée, d'adresse ou de numéro légal.

## 12. Langues du site

Recommandation : prévoir une expérience bilingue français / anglais, avec une structure permettant de changer de langue facilement.

Le français et l'anglais doivent être de vraies versions éditoriales du site, et non une traduction automatique approximative. Le sélecteur de langue doit fonctionner. Si une seule langue est livrée dans la première itération, préparer le code pour ajouter la seconde sans réécrire tout le site.

## 13. Conversion et mesure

Objectif principal du site : faire comprendre le projet et recueillir l'intérêt de visiteurs potentiels.

CTA prioritaire : inscription à la liste d'attente, uniquement si le formulaire peut réellement enregistrer les inscriptions.

Événements utiles à prévoir pour une future intégration analytique :
- clic sur le CTA principal ;
- début de formulaire ;
- inscription confirmée ;
- changement de langue ;
- clic sur les sections clés.

Ne pas ajouter de tracking intrusif ou de collecte non nécessaire. Ne pas intégrer d'outil analytique sans configuration et consentement appropriés.

## 14. Contraintes et éléments inconnus

Les éléments suivants ne sont pas encore confirmés et doivent rester configurables ou être omis :
- URL officielle du site.
- Adresse e-mail de contact.
- Numéros de téléphone et WhatsApp.
- Comptes de réseaux sociaux.
- Date de lancement.
- Tarifs et abonnements.
- Fournisseurs IA définitifs.
- Performances mesurées (latence, précision, disponibilité).
- Politique de confidentialité et mentions légales officielles.
- URL et backend de la liste d'attente.
- Logo final et fichiers de marque définitifs.

Ne pas inventer ces informations.

## 15. Priorités produit qui doivent transparaître sur le site

1. Valider une expérience mobile français–anglais.
2. Maîtriser la latence, la qualité vocale et les coûts.
3. Tester avec de vrais utilisateurs.
4. Définir le modèle économique sur la base de données réelles.
5. Étendre ensuite les langues et les usages.
6. N'envisager le hardware qu'après validation de la demande.

**Principe directeur :** Lingora AI doit d'abord prouver qu'il résout un vrai problème de communication avec une expérience vocale fiable et un modèle économique viable, avant de devenir éventuellement un écosystème matériel.
