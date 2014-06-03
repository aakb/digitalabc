<?php

/* DigitalABCMainBundle:Default:index.html.twig */
class __TwigTemplate_0d714d07f7ab11100b27462fa9969c3286c6066f7fde4c26699914c020956bf8 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("::base.html.twig");

        $this->blocks = array(
            'body' => array($this, 'block_body'),
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
        echo "<section class=\"quiz-header\">
    <div class=\"quiz-header--inner\">
        <h2 class=\"quiz-header--question\">tjek på din NemID OG digital postkasse?</h2>
        <h1 class=\"quiz-header--punchline\">Ingen stress</h1>
    </div>
</section>
";
    }

    public function getTemplateName()
    {
        return "DigitalABCMainBundle:Default:index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  31 => 4,  28 => 3,);
    }
}
