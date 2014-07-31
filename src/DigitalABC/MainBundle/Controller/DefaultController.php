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
}
