<?php

namespace DigitalABC\QuizBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('DigitalABCQuizBundle:Default:index.html.twig');
    }
}
