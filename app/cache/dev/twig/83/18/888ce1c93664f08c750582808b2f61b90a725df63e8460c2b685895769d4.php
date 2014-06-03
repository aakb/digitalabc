<?php

/* ::base.html.twig */
class __TwigTemplate_8318888ce1c93664f08c750582808b2f61b90a725df63e8460c2b685895769d4 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'body' => array($this, 'block_body'),
            'javascripts' => array($this, 'block_javascripts'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html>
<head>
    <title>Digital ABC</title>
    <meta charset=\"utf-8\">
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">
    <meta name=\"viewport\" content=\"width=device-width\">
    <link rel=\"stylesheet\" href=\"/css/styles.css\">
    <link rel=\"stylesheet\" href=\"/css/fonts/bebas/bebas.css\">
</head>
<body>
    <header class=\"header\" role=\"banner\">
        <div class=\"header--inner\">
            <a href=\"/\" title=\"Digital ABC\" class=\"header--logo\"><img src=\"/images/logo.png\"></a>
            <a href=\"#\" title=\"Menu\" class=\"header--menu\"><img src=\"/images/menu.png\"></a>
        </div>
    </header>
    ";
        // line 18
        $this->displayBlock('body', $context, $blocks);
        // line 19
        echo "    ";
        $this->displayBlock('javascripts', $context, $blocks);
        // line 20
        echo "</body>
</html>
";
    }

    // line 18
    public function block_body($context, array $blocks = array())
    {
    }

    // line 19
    public function block_javascripts($context, array $blocks = array())
    {
    }

    public function getTemplateName()
    {
        return "::base.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  56 => 19,  51 => 18,  45 => 20,  42 => 19,  40 => 18,  21 => 1,  47 => 15,  44 => 14,  32 => 4,  29 => 3,);
    }
}
