import React from "react";
import { getDefaultKeyBinding, KeyBindingUtil } from "draft-js";
import createLinkifyPlugin from "draft-js-linkify-plugin";

const linkifyPlugin = createLinkifyPlugin();

function Linkify(Editor) {
  return class extends React.Component {
    render() {
      let plugs = [];
      if (this.props.plugins) {
        plugs = this.props.plugins;
      }
      plugs.push(linkifyPlugin);

      const { plugins, ...props } = this.props;
      return <Editor plugins={plugs} {...props} />;
    }
  };
}

module.exports.mutations = {
  BaseEditor: Linkify
};
