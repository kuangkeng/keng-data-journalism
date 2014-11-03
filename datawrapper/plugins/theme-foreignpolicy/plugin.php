<?php
// Here we extend the DatawrapperPlugin class.
// This is the most important file in our plugin 
class DatawrapperPlugin_ThemeForeignpolicy extends DatawrapperPlugin {
    // This init function defines what the plugin aims for.
    public function init() {
        // Here we use the DatawrapperTheme static method to register 
        // the meta data of our theme.
        DatawrapperTheme::register($this, $this->getMeta());
    }
    // This private method defines the meta data that drive our theme
    private function getMeta() {
        // The meta data are represented as an associative array
        return array(
            // This unique id is very important
            // to help us identify our plugin 
            // among the others 
            'id' => 'foreignpolicy',
            // This option is central for this because
            // it says that it inherits properties from the 'default' theme 
            'extends' => 'default',            
            // Some display options
            'title' => 'Foreign Policy',
            'link' => 'http://www.foreignpolicy.com',
            'restricted' => NULL,
            // We encrouage you to use the 'version' field as much as possible
            // to ensure a good refreshing of the assets
            'version' => '1.0.0',
            'option-filter' => array(
                'line-chart' => array(
                    'show-grid' => true,
                ),
            ),
        );
    }
} // EOF