<?php

namespace DigitalABC\QuizBundle\Controller;

use DigitalABC\QuizBundle\Entity\QuizResult;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class ApiController extends Controller
{
    public function saveResultAction()
    {
        $request = Request::createFromGlobals();
        $data = json_decode($request->getContent(), true);

        $number = $data['result'];
        $answers = $data['answers'];

        $result = new QuizResult();
        $result->setResult($number);
        $result->setAnswers($answers);
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
