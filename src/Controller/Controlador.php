<?php
    namespace App\Controller;

    use Symfony\Component\HttpFoundation\Response;
    use Symfony\Component\Routing\Annotation\Route;
    use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

    class Controlador extends AbstractController
    {
        #[Route('/')]
        public function home(): Response
        {
            return $this->render('home.html', [
                'App' => [
                    'title' => "Home"
                ]
            ]);
             
        }

        #[Route('/skills')]
        public function skills(): Response
        {
            return $this->render('skills.html', [
                'App' => [
                    'title' => "Skills"
                ]
            ]);
             
        }
        
        #[Route('/where')]
        public function where(): Response
        {
            return $this->render('where.html', [
                'App' => [
                    'title' => "Where"
                ]
            ]);
             
        }
        #[Route('/hobbies')]
        public function hobbies(): Response
        {
            return $this->render('hobbies.html', [
                'App' => [
                    'title' => "Hobbies"
                ]
            ]); 
        }
        #[Route('/erasmus')]
        public function erasmus(): Response
        {
            return $this->render('erasmus.html', [
                'App' => [
                    'title' => "Erasmus"
                ]
            ]);
        }
        #[Route('/family')]
        public function family(): Response
        {
            return $this->render('family.html', [
                'App' => [
                    'title' => "Family"
                ]
            ]);
        }
    }


?>