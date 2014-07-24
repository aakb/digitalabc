<?php
namespace DigitalABC\MainBundle\Controller;

use DigitalABC\MainBundle\Entity\QuizResult;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class ApiController
 * @package DigitalABC\QuizBundle\Controller
 * @Route("/api")
 */
class ApiController extends Controller {
  /**
   * Saves the result to the database and returns the UID of the result.
   * @Route("/result/save")
   * @return Response
   */
  public function saveResultAction() {
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

  /**
   * Get the result with the given id.
   * @param $id
   *   UID of the result
   *
   * @Route("/result/{id}")
   *
   * @return Response
   */
  public function getResultAction($id) {
    $result = $this->getDoctrine()->getRepository('DigitalABCMainBundle:QuizResult')->findOneById($id);

    if (!$result) {
      return new Response(null, 404);
    }

    $resultArray = array(
      'answers' => $result->getAnswers(),
      'result'  => $result->getResult()
    );

    return new Response(json_encode($resultArray), 200);
  }

  /**
   * Get 10 questions.
   *
   * @Route("/questions")
   *
   * @return Response
   */
  public function getQuestionsAction() {
    $questions = array(
      array(
        'question' => 'Hvad er Digital Selvbetjening?',
        'answers' =>
          array(
            array(
              'id' => 0,
              'text' => 'Når de gamle på plejehjemmet har fjernbetjening til gardinerne',
            ),
            array (
              'id' => 1,
              'text' => 'Når prisen på dine varer i supermarkedet automatisk registreres i kurven',
            ),
            array (
              'id' => 2,
              'text' => 'Når man kan udfylde skemaer og få fat på kommunen på nettet',
            ),
          ),
        'correctAnswer' => 2,
      ),
      array (
        'question' => 'HVORDAN FÅR MAN UNGDOMS ELLER STUDIERABAT TIL BUSSEN?',
        'answers' =>
          array (
            array (
              'id' => 0,
              'text' => 'Spørger chaufføren - han er cool',
            ),
            array (
              'id' => 1,
              'text' => 'Udfylder et skema, du får på din uddannelse og sender til Midttrafik',
            ),
            array (
              'id' => 2,
              'text' => 'Du bruger bare dit NemID til at udfylde en ansøgning på nettet',
            ),
          ),
        'correctAnswer' => 2,
      ),
      array (
        'question' => 'HVAD ER NemBS?',
        'answers' =>
          array (
            array (
              'id' => 0,
              'text' => 'Et nyt realityshow hvor B.S. Christiansen dater PH-deltagere',
            ),
            array (
              'id' => 1,
              'text' => 'En light version af borgerservice på biblioteket',
            ),
            array (
              'id' => 2,
              'text' => 'Quickkassen i borgerservice på Rådhuset',
            ),
          ),
        'correctAnswer' => 1,
      ),
      array (
        'question' => 'HVAD ER ET NØGLEKORT?',
        'answers' =>
          array (
            array (
              'id' => 0,
              'text' => 'Et elektronisk kort, der erstatter gammeldags nøgler',
            ),
            array (
              'id' => 1,
              'text' => 'En app, der finder dine nøgler via GPS',
            ),
            array (
              'id' => 2,
              'text' => 'Et kort med koder, du bruger sammen med dit NemID',
            ),
          ),
        'correctAnswer' => 2,
      ),
      array (
        'question' => 'HVAD ER DIGITAL POSTKASSE?',
        'answers' =>
          array (
            array (
              'id' => 0,
              'text' => 'Indbakken på din e-mail',
            ),
            array (
              'id' => 1,
              'text' => 'Det nye pakkepostsystem i supermarkederne',
            ),
            array (
              'id' => 2,
              'text' => 'En personlig postkasse på nettet, hvor du får breve fra det offentlige',
            ),
          ),
        'correctAnswer' => 2,
      ),
      array (
        'question' => 'HVAD ER HOTLINE?',
        'answers' =>
          array (
            array (
              'id' => 0,
              'text' => 'Det direkte nummer til skadestuen',
            ),
            array (
              'id' => 1,
              'text' => 'Et nummer, du kan ringe til, hvis du ikke fatter digital selvbetjening',
            ),
            array (
              'id' => 2,
              'text' => 'En datingside for it-nørder',
            ),
          ),
        'correctAnswer' => 1,
      ),
      array (
        'question' => 'HVAD ER DET BLÅ SYGESIKRINGSBEVIS?',
        'answers' =>
          array (
            array (
              'id' => 0,
              'text' => 'Sygesikringskortet når du har vasket det sammen med dine nye jeans.',
            ),
            array (
              'id' => 1,
              'text' => 'Sygesikringskort, som du skal bestille online og bruge i alle EU-lande',
            ),
            array (
              'id' => 2,
              'text' => 'Sygesikringskort som skal bruges, hvis du rejser i Østen',
            ),
          ),
        'correctAnswer' => 1,
      ),
      array (
        'question' => 'HVAD ER FÆLLESOFFENTLIG KANALSTRATEGI?',
        'answers' =>
          array (
            array (
              'id' => 0,
              'text' => 'Plan for at der bliver smidt færre cykler i danske kanaler.',
            ),
            array (
              'id' => 1,
              'text' => 'Plan for at begynde på digital kommunikation mellem borgere og det offentlige',
            ),
            array (
              'id' => 2,
              'text' => 'DR’s plan for fordeling af licenspenge mellem radiokanalerne ',
            ),
          ),
        'correctAnswer' => 1,
      ),
      array (
        'question' => 'HVAD KAN DU KLARE MED DIGITAL SELVBETJENING?',
        'answers' =>
          array (
            array (
              'id' => 0,
              'text' => 'Stemme til folketingsvalg',
            ),
            array (
              'id' => 1,
              'text' => 'Melde lægeskift',
            ),
            array (
              'id' => 2,
              'text' => 'Bestille et pas',
            ),
          ),
        'correctAnswer' => 2,
      ),
      array (
        'question' => 'HVORDAN MODTAGER DU I FREMTIDEN BØDER FRA BIBLIOTEKET?',
        'answers' =>
          array (
            array (
              'id' => 0,
              'text' => 'De trækkes automatisk fra din fremtidige S.U.',
            ),
            array (
              'id' => 1,
              'text' => 'I din digitale postkasse på nettet',
            ),
            array (
              'id' => 2,
              'text' => 'Via Snapchat - så er de væk 10 sekunder senere',
            ),
          ),
        'correctAnswer' => 1,
      ),
      array (
        'question' => 'HVORDAN FÅR MAN SU PÅ SIN VIDEREGÅENDE UDDANNELSE?',
        'answers' =>
          array (
            array (
              'id' => 0,
              'text' => 'Taler med studievejlederen på din skole',
            ),
            array (
              'id' => 1,
              'text' => 'Tager din mor og far med i banken og ansøger',
            ),
            array (
              'id' => 2,
              'text' => 'Går på Borger.dk og bruger dit NemID til at ansøge',
            ),
          ),
        'correctAnswer' => 2,
      ),
      array (
        'question' => 'HVAD ER NemID?',
        'answers' =>
          array (
            array (
              'id' => 0,
              'text' => 'Et elektronisk ID-kort man kan vise til dørmænd',
            ),
            array (
              'id' => 1,
              'text' => 'Elektronisk signatur på nettet som alle over 15 år skal bestille ',
            ),
            array (
              'id' => 2,
              'text' => 'En app der identificerer berømtheder i nærheden',
            ),
          ),
        'correctAnswer' => 1,
      ),
      array (
        'question' => 'HVAD ER BORGER.DK',
        'answers' =>
          array (
            array (
              'id' => 0,
              'text' => 'En netportal til køb og salg af borgere',
            ),
            array (
              'id' => 1,
              'text' => 'En hjemmeside for borgmestre, der twerker som Miley',
            ),
            array (
              'id' => 2,
              'text' => 'En portal for digital selvbetjening, hvor du kan tjekke post fra det offentlige',
            ),
          ),
        'correctAnswer' => 2,
      ),
      array (
        'question' => 'HVAD ER INKASSO?',
        'answers' =>
          array (
            array (
              'id' => 0,
              'text' => 'Mexicansk for det engelske udtryk ”in case of”',
            ),
            array (
              'id' => 1,
              'text' => 'Processen der sørger for, at man betaler sin gæld til det offentlige',
            ),
            array (
              'id' => 2,
              'text' => 'Vestjysk slang for pizzaæsker',
            ),
          ),
        'correctAnswer' => 1,
      ),
      array (
        'question' => 'HVAD SKER DER D. 1. NOVEMBER 2014?',
        'answers' =>
          array (
            array (
              'id' => 0,
              'text' => 'Det offentlige begynder at sende post til din digitale postkasse',
            ),
            array (
              'id' => 1,
              'text' => 'Folketinget holder ”tag-dit-kæledyr-med-på-arbejde”-dag',
            ),
            array (
              'id' => 2,
              'text' => 'Det offentlige begynder at tjekke, hvor meget tid du bruger på lektier',
            ),
          ),
        'correctAnswer' => 0,
      ),
      array (
        'question' => 'HVAD SKER DER D. 1. NOVEMBER 2014?',
        'answers' =>
          array (
            array (
              'id' => 0,
              'text' => 'Det offentlige begynder at sende post til din digitale postkasse',
            ),
            array (
              'id' => 1,
              'text' => 'Folketinget holder ”tag-dit-kæledyr-med-på-arbejde”-dag',
            ),
            array (
              'id' => 2,
              'text' => 'Det offentlige begynder at tjekke, hvor meget tid du bruger på lektier',
            ),
          ),
        'correctAnswer' => 0,
      ),
    );

    shuffle($questions);

    $items = array();
    for ($i = 0; $i < 10; $i++) {
      $items[] = $questions[$i];
    }

    return new Response(json_encode($items));
  }
}
