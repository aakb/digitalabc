<?php

/* DigitalABCQuizBundle:Default:index.html.twig */
class __TwigTemplate_92dbfa7d72ee06d4a958aeb540207e4cdf1b344886ba6a5d13038519e2c9225d extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("::base.html.twig");

        $this->blocks = array(
            'body' => array($this, 'block_body'),
            'javascripts' => array($this, 'block_javascripts'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "::base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_body($context, array $blocks = array())
    {
        // line 4
        echo "<section class=\"quiz-header\" data-ng-app=\"abcApp\">
    <div class=\"quiz-header--inner\">
        <h2 class=\"quiz-header--question\">tjek på din NemID OG digital postkasse?</h2>
        <h1 class=\"quiz-header--punchline\">Ingen stress</h1>
        <div data-ng-view=\"\" class=\"view-frame\">
        </div>
    </div>
</section>
";
    }

    // line 14
    public function block_javascripts($context, array $blocks = array())
    {
        // line 15
        echo "<!-- Script imports -->
<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js\"></script>
<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js\"></script>
<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-animate.js\"></script>
<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.js\"></script>

<!-- Angular scripts -->
<script src=\"/js/app.js\"></script>
<script src=\"/js/directives.js\"></script>
<script src=\"/js/routing.js\"></script>
<script src=\"/js/factory.js\"></script>
<script src=\"/js/controllers.js\"></script>
";
    }

    public function getTemplateName()
    {
        return "DigitalABCQuizBundle:Default:index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  47 => 15,  44 => 14,  32 => 4,  29 => 3,);
    }
}
