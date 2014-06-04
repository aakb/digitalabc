<?php
/**
 * @file
 * This file is a part of the Digital ABC website.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace DigitalABC\QuizBundle\Entity;

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
     * @ORM\Column(type="string", name="facebook_id", length=255)
     */
    protected $facebookID;

    /**
     * @ORM\Column(type="integer", name="result")
     */
    protected $result;

    /**
     * @ORM\Column(name="created", type="date")
     */
    protected $created;

    public function getId()
    {
        return $this->id;
    }

    public function getFacebookID()
    {
        return $this->facebookID;
    }

    public function setFacebookID($facebookID)
    {
        $this->facebookID = $facebookID;
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
}