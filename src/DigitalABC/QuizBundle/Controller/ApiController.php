<?php

namespace DigitalABC\QuizBundle\Controller;

use DigitalABC\QuizBundle\Entity\QuizResult;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ApiController extends Controller
{
    public function saveResultAction()
    {
        $request = $this->get('request')->query;
        $number = $request->get('result');

        $result = new QuizResult();
        $result->setFacebookID("fb");
        $result->setResult($number);
        $result->setCreated(new \DateTime());

        $manager = $this->getDoctrine()->getManager();
        $manager->persist($result);
        $manager->flush();

        $resultID = $result->getId();

        $resposeArray = array(
            'id' => $resultID
        );

        return new Response(json_encode($resposeArray), 200);
    }
}
