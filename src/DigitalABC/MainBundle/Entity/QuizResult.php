<?php
/**
 * @file
 * This file is a part of the Digital ABC website.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace DigitalABC\MainBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Class QuizResult
 *
 * Doctrine entity of a QuizResult.
 *
 * @ORM\Entity
 * @ORM\Table(name="quiz_results")
 */
class QuizResult
{
  /**
   * @ORM\Column(type="guid")
   * @ORM\Id
   * @ORM\GeneratedValue(strategy="UUID")
   */
  protected $id;

  /**
   * @ORM\Column(type="integer", name="result")
   */
  protected $result;

  /**
   * @ORM\Column(name="created", type="date")
   */
  protected $created;

  /**
   * @ORM\Column(name="answers", type="array")
   */
  protected $answers;

  public function getId()
  {
    return $this->id;
  }

  public function getResult() {
    return $this->result;
  }

  public function setResult($result) {
    $this->result = $result;
  }

  public function getCreated() {
    return $this->created;
  }

  public function setCreated($created) {
    $this->created = $created;
  }

  public function getAnswers() {
    return $this->answers;
  }

  public function setAnswers($answers) {
    $this->answers = $answers;
  }
}
