<?php
namespace DigitalABC\MainBundle\Extension;

use Serializable, Doctrine\ORM\EntityManager;
use Doctrine\ORM\Id\AbstractIdGenerator;

class CustomIdGenerator extends AbstractIdGenerator {
  public function generate(EntityManager $em, $entity) {
    $repos = $em->getRepository('DigitalABCMainBundle:QuizResult');
    while (TRUE) {
      $string = $this->generateRandomString(4);
      $item = $repos->findById($string);
      if (!$item) {
        return $string;
      }
    }
  }

  function generateRandomString($length = 10) {
    $characters = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
      $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randomString;
  }
}
