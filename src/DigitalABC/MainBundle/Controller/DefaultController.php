<?php

namespace DigitalABC\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;


/**
 * @Route("/")
 */
class DefaultController extends Controller {

  /**
   * @Route("/")
   * @return \Symfony\Component\HttpFoundation\Response
   */
  public function indexAction() {
    return $this->render('DigitalABCMainBundle:Default:index.html.twig');
  }


  /**
   * @Route("/challenge/{id}")
   */
  public function challengeAction($id) {
    $result = $this->getDoctrine()
      ->getRepository('DigitalABCMainBundle:QuizResult')->find($id);

    return $this->render('DigitalABCMainBundle:Default:challenge.html.twig', array(
      "id" => $id,
      'result' => $result->getResult()
    ));
  }
}
