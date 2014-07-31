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
   * @param $request
   *   The request object.
   *
   * @Route("/")
   * @return \Symfony\Component\HttpFoundation\Response
   */
  public function indexAction(Request $request) {
    $response = $this->render('DigitalABCMainBundle:Default:index.html.twig');

    $response->setETag(md5($response->getContent()));
    $response->setPublic();
    $response->isNotModified($request);

    return $response;
  }

  /**
  * @Route("/quiz/challenge/{id}")
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
