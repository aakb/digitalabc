<?php

namespace DigitalABC\QuizBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * @Route("/quiz")
 */
class DefaultController extends Controller {
  /**
   * @Route("/")
   */
  public function indexAction() {
    return $this->render('DigitalABCQuizBundle:Default:index.html.twig');
  }

  /**
   * @Route("/challenge/{id}")
   */
  public function challengeAction($id) {
    $result = $this->getDoctrine()
        ->getRepository('DigitalABCQuizBundle:QuizResult')->find($id);

    return $this->render('DigitalABCQuizBundle:Default:challenge.html.twig', array(
        "id" => $id,
        'result' => $result->getResult()
    ));
  }
}
