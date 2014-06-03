<?php

namespace DigitalABC\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('DigitalABCMainBundle:Default:index.html.twig');
    }
}
