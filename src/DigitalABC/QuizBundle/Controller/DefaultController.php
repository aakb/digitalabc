<?php

namespace DigitalABC\QuizBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('DigitalABCQuizBundle:Default:index.html.twig');
    }

    public function countdownAction()
    {
      return $this->render('DigitalABCQuizBundle:Default:countdown.html.twig');
    }

    public function challengeAction($id)
    {
        $result = $this->getDoctrine()
            ->getRepository('DigitalABCQuizBundle:QuizResult')->find($id);

        return $this->render('DigitalABCQuizBundle:Default:challenge.html.twig', array(
            "id" => $id,
            'result' => $result->getResult()
        ));
    }
}
